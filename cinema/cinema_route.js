const express = require("express");
const router = express.Router();

const controller = require("./cinema_controller")
const check = require("../checkAdminOrUser");

router.get("/getcinemas", controller.getCinemas);

router.post("/addcinema", check.isAdmin, controller.addCinema);

router.put("/updatecinema/:code", check.isAdmin, controller.updateCinema);

router.delete("/deletecinema/:code", check.isAdmin, controller.deleteCinema);

module.exports = router;