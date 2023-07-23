module.exports = (sequelize, Sequelize) => {
  const Barang = sequelize.define("barangs", {
    barang_id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nama_barang: {
      type: Sequelize.STRING,
    },
    stok: {
      type: Sequelize.INTEGER,
    },
    harga_beli: {
      type: Sequelize.INTEGER,
    },
    harga_jual: {
      type: Sequelize.INTEGER,
    },
  });

  return Barang;
};
