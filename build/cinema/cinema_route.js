"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const cinema_controller_1 = __importDefault(require("./cinema_controller"));
const checkAdminOrUser_1 = __importDefault(require("../checkAdminOrUser"));
router.get("/getcinemas", cinema_controller_1.default.getCinemas);
router.post("/addcinema", checkAdminOrUser_1.default.isAdmin, cinema_controller_1.default.addCinema);
router.put("/updatecinema/:code", checkAdminOrUser_1.default.isAdmin, cinema_controller_1.default.updateCinema);
router.delete("/deletecinema/:code", checkAdminOrUser_1.default.isAdmin, cinema_controller_1.default.deleteCinema);
exports.default = router;
