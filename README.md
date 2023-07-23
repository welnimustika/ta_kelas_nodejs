Tugas Akhir (unjuk keterampilan)
Nama		: Welni Mustika S.Kom
Hp/WA		: 085363357691
Email		: welnimustika@gmail.com
Github		: welnimustika
Keterangan TA	: Membuat aplikasi penjualan (CRUD barang, Penjualan) menggunakan JWT

1.	API POSTMAN LIST
https://api.postman.com/collections/6659963-5648813b-2c1a-4867-9043-2cb61ed64b1b?access_key=PMAT-01H60G1VGC2SN8HRTK9HQ22008

2.	GITHUB APP (Branch Master)
https://github.com/welnimustika/ta_kelas_nodejs.git

3.	Sturcture APP
 
4.	Git Ignore (isi .gitignore)

node_modules
package-lock.json


5.	Isi File App (main app)
1). Package.json
{
  "name": "ta_kelas_nodejs_welni_mustika",
  "version": "1.0.0",
  "description": "Tugas akhir (unjuk keterampilan) kelas nodeJs prakerja",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/welnimustika/ta_kelas_nodejs.git"
  },
  "keywords": [
    "toko_online"
  ],
  "author": "Welni Mustika, S.Kom",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/welnimustika/ta_kelas_nodejs/issues"
  },
  "homepage": "https://github.com/welnimustika/ta_kelas_nodejs#readme",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "joi": "^17.9.2",
    "jsonwebtoken": "^9.0.1",
    "mysql2": "^3.5.2",
    "sequelize": "^6.32.1"
  }
}


2). Server.js
const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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

const db = require("./app/models");
const Role = db.role;
const User = db.user;
var bcrypt = require("bcryptjs");

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "Super_Admin"
  });
 
  Role.create({
    id: 2,
    name: "Admin"
  });
}

