const express = require("express");
const cors = require("cors");

const app = express();



var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Welni Mustika application." });
});
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/barang.routes')(app);
require('./app/routes/penjualan.routes')(app);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


// const db = require("./app/models");
// const Role = db.role;
// const User = db.user;
// var bcrypt = require("bcryptjs");

// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Db');
//   initial();
// });


// function initial() {
//   Role.create({
//     id: 1,
//     name: "Super_Admin"
//   });
 
//   Role.create({
//     id: 2,
//     name: "Admin"
//   });
// }