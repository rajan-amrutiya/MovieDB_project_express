import express from 'express';
const router = express.Router();

import check from '../checkAdminOrUser';
import controller from './cities_controller';
import {validate, Joi } from 'express-validation';

const schema = {
    body: Joi.object({
        name: Joi.string().min(3).required(),
        state: Joi.string().required()
    })
}

router.get("/getcities", controller.getCities);

router.post("/addcity", check.isAdmin, validate(schema), controller.addCity);

router.put("/updatecity/:cityid", check.isAdmin, validate(schema), controller.updateCity);

router.delete("/deletecity/:cityid", check.isAdmin, controller.deleteCity);

export default router;