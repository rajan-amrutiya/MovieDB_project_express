"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reports_model_1 = __importDefault(require("./reports_model"));
let movielistByCity = async (req, res) => {
    try {
        let cityname = req.params.cityname;
        let { rows } = await reports_model_1.default.movielistByCityQuery(cityname);
        res.send(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let selectCinema = async (req, res) => {
    try {
        let cinemaName = req.params.cinemaname;
        let { rows } = await reports_model_1.default.selectCinemaQuery(cinemaName);
        res.send(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let selectMovie = async (req, res) => {
    try {
        let movieName = req.params.moviename;
        let { rows } = await reports_model_1.default.selectMovieQuery(movieName);
        res.json(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let seatingPlan = async (req, res) => {
    try {
        let body = req.body;
        let { rows } = await reports_model_1.default.seatingPlanQuery(body);
        res.json(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let top10actors = async (req, res) => {
    try {
        let { rows } = await reports_model_1.default.top10actorsQuery();
        res.json(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let movieYear = async (req, res) => {
    try {
        let year = req.params.year;
        let { rows } = await reports_model_1.default.movieYearQuery(year);
        res.json(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let top10customers = async (req, res) => {
    try {
        let { rows } = await reports_model_1.default.top10customersQuery();
        res.json(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let totalbookings = async (req, res) => {
    try {
        let { rows } = await reports_model_1.default.totalbookingsQuery();
        res.json(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let bookedtickets_customer = async (req, res) => {
    try {
        let { rows } = await reports_model_1.default.bookedtickets_customer_Query();
        res.json(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
let booked_customers = async (req, res) => {
    try {
        let body = req.body;
        let { rows } = await reports_model_1.default.booked_customers_Query(body);
        res.json(rows);
    }
    catch {
        res.send("Data not found");
    }
    ;
};
exports.default = { movielistByCity,
    selectCinema,
    selectMovie,
    seatingPlan,
    top10actors,
    movieYear,
    top10customers,
    totalbookings,
    bookedtickets_customer,
    booked_customers
};
