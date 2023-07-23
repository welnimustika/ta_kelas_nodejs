const db = require("../models");
const config = require("../config/auth.config");
const Penjualan = db.penjualan;
const Barang = db.barang;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

exports.index = (req, res) => {
  Penjualan.findAll()
    .then((penjualan) => {
      res.send({ message: "Penjualan berhasil diambil", data: penjualan });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.detail = (req, res) => {
  Penjualan.findByPk(req.params.id)
    .then((penjualan) => {
      res.send({ message: "Penjualan berhasil diambil", data: penjualan });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.create = (req, res) => {
  Barang.findByPk(req.body.barang_id).then((barang) => {
    let total = barang.harga_jual * req.body.qty;
    Penjualan.create({
      barang_id: req.body.barang_id,
      qty: req.body.qty,
      harga_satuan: barang.harga_jual,
      total: total,
    })
      .then((penjualan) => {
        res.send({ message: "Penjualan berhasil diinput" });
      })
      .catch((err) => {
        res.status(500).send({ message: err.message });
      });
  });
};

exports.update = (req, res) => {
  let barang = Barang.findByPk(req.body.barang_id);
  let total = barang.harga_jual * req.body.qty;

  Penjualan.update(
    {
      barang_id: req.body.barang_id,
      qty: req.body.qty,
      harga_satuan: req.body.harga_jual,
      total: total,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((penjualan) => {
      res.send({ message: "Penjualan berhasil di Update" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.delete = (req, res) => {
  Penjualan.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((penjualan) => {
      res.send({ message: "Penjualan berhasil di Hapus" });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
