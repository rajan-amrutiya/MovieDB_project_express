const express = require("express");
const router = express.Router();
const check = require("../checkAdminOrUser");

const controller = require("./cities_controller");
const {validate, Joi } = require("express-validation");

const schema = {
    body: Joi.object({
        name: Joi.string().min(3).required(),
        state: Joi.string().required()
    })
}
// function checkData(req,res, next){
//     if(req.body.name == "" || req.body.state == ""){
//         res.send("Data should not be null")
//     }else{
//         next()
//     }
// }

router.get("/getcities", controller.getCities);

router.post("/addcity", check.isAdmin, validate(schema), controller.addCity);

router.put("/updatecity/:cityid", check.isAdmin, validate(schema), controller.updateCity);

router.delete("/deletecity/:cityid", check.isAdmin, controller.deleteCity);

module.exports = router;