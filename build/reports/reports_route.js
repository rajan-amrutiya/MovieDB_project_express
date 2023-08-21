"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const reports_controller_1 = __importDefault(require("./reports_controller"));
router.get("/movielist/:cityname", reports_controller_1.default.movielistByCity);
router.get("/selectcinema/:cinemaname", reports_controller_1.default.selectCinema);
router.get("/selectmovie/:moviename", reports_controller_1.default.selectMovie);
router.get("/seatingplan", reports_controller_1.default.seatingPlan);
router.get("/top10actors", reports_controller_1.default.top10actors);
router.get("/movieyear/:year", reports_controller_1.default.movieYear);
router.get("/top10customers", reports_controller_1.default.top10customers);
router.get("/totalbookings", reports_controller_1.default.totalbookings);
router.get("/bookedtickets_customer", reports_controller_1.default.bookedtickets_customer);
router.get("/booked_customers", reports_controller_1.default.booked_customers);
exports.default = router;
