const { authJwt } = require("../middleware");
const controller = require("../controllers/barang.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get(
    "/api/barang/",
    [authJwt.verifyToken],
    controller.index
  );
  app.get(
    "/api/barang/:id",
    [authJwt.verifyToken],
    controller.detail
  );
  app.post(
    "/api/barang",
    [authJwt.verifyToken],
    controller.create
  );
  app.put(
    "/api/barang/:id",
    [authJwt.verifyToken],
    controller.update
  );
  app.delete(
    "/api/barang/:id",
    [authJwt.verifyToken],
    controller.delete
  );

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
};