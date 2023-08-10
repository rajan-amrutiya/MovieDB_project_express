const express = require("express");
const router = express.Router();
const {validate, ValidationError,Joi } = require("express-validation");
const controller = require("../login/logins_controller");

const schema = {
    body : Joi.object({
    user_name : Joi.string().min(4).required(),
    user_password : Joi.string().min(1).required()
})};

router.post("/" , validate(schema), controller.login);

module.exports = router;
