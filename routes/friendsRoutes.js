const route =require("express").Router();
const controller =require("../controllers/friendsControllers")


route.get("/", controller.home);
route.get("/fara", controller.fara);
route.get("/gary", controller.gary);
route.get("/jule", controller.jule);

module.exports =route