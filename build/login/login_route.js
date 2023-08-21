"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const express_validation_1 = require("express-validation");
const logins_controller_1 = __importDefault(require("./logins_controller"));
const schema = {
    body: express_validation_1.Joi.object({
        user_name: express_validation_1.Joi.string().min(4).required(),
        user_password: express_validation_1.Joi.string().min(1).required()
    })
};
router.post("/", (0, express_validation_1.validate)(schema), logins_controller_1.default.login);
exports.default = router;
