const { authJwt } = require("../middleware");
const controller = require("../controllers/penjualan.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get(
    "/api/penjualan/",
    [authJwt.verifyToken],
    controller.index
  );
  app.get(
    "/api/penjualan/:id",
    [authJwt.verifyToken],
    controller.detail
  );
  app.post(
    "/api/penjualan",
    [authJwt.verifyToken],
    controller.create
  );
  app.put(
    "/api/penjualan/:id",
    [authJwt.verifyToken],
    controller.update
  );
  app.delete(
    "/api/penjualan/:id",
    [authJwt.verifyToken],
    controller.delete
  );

//   app.get(
//     "/api/test/admin",
//     [authJwt.verifyToken, authJwt.isAdmin],
//     controller.adminBoard
//   );
};