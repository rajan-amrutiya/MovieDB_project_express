"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cinema_model_1 = __importDefault(require("./cinema_model"));
let getCinemas = async (req, res) => {
    try {
        let { rows } = await cinema_model_1.default.getCinema();
        res.send(rows);
    }
    catch {
        res.send("Data not found");
    }
};
let addCinema = async (req, res) => {
    try {
        let body = req.body;
        let responce = await cinema_model_1.default.createCinema(body);
        res.send("Cinema added ");
    }
    catch {
        res.send("Could not add cinema");
    }
};
let updateCinema = async (req, res) => {
    try {
        let body = req.body;
        let cinemaCode = req.params.code;
        let responce = await cinema_model_1.default.updateCinema(body, cinemaCode);
        res.json("Cinema updated ");
    }
    catch {
        res.send("Could not update cinema");
    }
    ;
};
let deleteCinema = async (req, res) => {
    try {
        let cinemaCode = req.params.code;
        let response = await cinema_model_1.default.removeCinema(cinemaCode);
        res.json("Deleted ");
    }
    catch {
        res.send("Could not delete cinema");
    }
};
exports.default = { getCinemas, addCinema, updateCinema, deleteCinema };
