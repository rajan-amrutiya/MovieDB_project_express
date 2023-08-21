import express from 'express';
const router = express.Router();
import {validate, ValidationError,Joi } from 'express-validation';
import controller from './logins_controller';


const schema = {
    body : Joi.object({
    user_name : Joi.string().min(4).required(),
    user_password : Joi.string().min(1).required()
})};

router.post("/" , validate(schema), controller.login);

export default router;
