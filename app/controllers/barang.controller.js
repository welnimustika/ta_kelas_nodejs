const db = require("../models");
const config = require("../config/auth.config");
const Barang = db.barang;
const Role = db.role;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.index = (req, res) => {
    Barang.findAll()
      .then(barang => {
        res.send({ message: "Barang berhasil diambil", data: barang });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.detail = (req, res) => {
    Barang.findByPk(req.params.id)
      .then(barang => {
        res.send({ message: "Barang berhasil diambil", data: barang });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.create = (req, res) => {
    Barang.create({
      nama_barang: req.body.nama_barang,
      stok: req.body.stok,
      harga_jual: req.body.harga_jual,
      harga_beli: req.body.harga_beli
    })
      .then(barang => {
        res.send({ message: "Barang berhasil diinput" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.update = (req, res) => {
    Barang.update({
      nama_barang: req.body.nama_barang,
      stok: req.body.stok,
      harga_jual: req.body.harga_jual,
      harga_beli: req.body.harga_beli
    },{
        where: {
            barang_id: req.params.id
        }
    }
    )
      .then(barang => {
        res.send({ message: "Barang berhasil di Update" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.delete = (req, res) => {
    Barang.destroy({
        where: {
            barang_id: req.params.id
        }
    }
    )
      .then(barang => {
        res.send({ message: "Barang berhasil di Hapus" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };