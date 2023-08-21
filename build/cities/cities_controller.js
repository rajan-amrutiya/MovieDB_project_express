"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cities_model_1 = __importDefault(require("./cities_model"));
let getCities = async (req, res) => {
    try {
        let { rows } = await cities_model_1.default.getCity();
        res.send(rows);
    }
    catch {
        res.send("data not found");
    }
};
let addCity = async (req, res) => {
    try {
        let body = req.body;
        let response = await cities_model_1.default.createCity(body);
        res.send("Added city");
    }
    catch {
        res.send("City already exists");
    }
    ;
};
let updateCity = async (req, res) => {
    try {
        let body = req.body;
        let cityid = req.params.cityid;
        let responce = await cities_model_1.default.updateCity(body, cityid);
        res.send("Updated ");
    }
    catch {
        res.send("Could not update city");
    }
    ;
};
let deleteCity = async (req, res) => {
    try {
        let cityid = req.params.cityid;
        let responce = await cities_model_1.default.removeCity(cityid);
        res.send("Deleted ");
    }
    catch {
        res.send("Could not delete city");
    }
};
exports.default = { getCities, addCity, updateCity, deleteCity };
