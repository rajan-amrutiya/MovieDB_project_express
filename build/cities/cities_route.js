"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const checkAdminOrUser_1 = __importDefault(require("../checkAdminOrUser"));
const cities_controller_1 = __importDefault(require("./cities_controller"));
const express_validation_1 = require("express-validation");
const schema = {
    body: express_validation_1.Joi.object({
        name: express_validation_1.Joi.string().min(3).required(),
        state: express_validation_1.Joi.string().required()
    })
};
router.get("/getcities", cities_controller_1.default.getCities);
router.post("/addcity", checkAdminOrUser_1.default.isAdmin, (0, express_validation_1.validate)(schema), cities_controller_1.default.addCity);
router.put("/updatecity/:cityid", checkAdminOrUser_1.default.isAdmin, (0, express_validation_1.validate)(schema), cities_controller_1.default.updateCity);
router.delete("/deletecity/:cityid", checkAdminOrUser_1.default.isAdmin, cities_controller_1.default.deleteCity);
exports.default = router;
