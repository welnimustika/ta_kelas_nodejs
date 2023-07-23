module.exports = (sequelize, Sequelize) => {
    const Penjualan = sequelize.define("penjualans", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      barang_id: {
        type: Sequelize.INTEGER,
      },
      qty: {
        type: Sequelize.INTEGER,
      },
      harga_satuan: {
        type: Sequelize.INTEGER,
      },
      total: {
        type: Sequelize.INTEGER,
      },
    });
  
    return Penjualan;
  };
  