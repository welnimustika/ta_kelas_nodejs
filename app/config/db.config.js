module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "ta_kelas_nodejs_welni_mustika",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };