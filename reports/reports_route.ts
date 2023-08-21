import express from 'express';
const router = express.Router();

import controller from './reports_controller';

router.get("/movielist/:cityname", controller.movielistByCity);

router.get("/selectcinema/:cinemaname", controller.selectCinema);

router.get("/selectmovie/:moviename", controller.selectMovie);

router.get("/seatingplan", controller.seatingPlan);

router.get("/top10actors", controller.top10actors);

router.get("/movieyear/:year", controller.movieYear);

router.get("/top10customers", controller.top10customers);

router.get("/totalbookings", controller.totalbookings);

router.get("/bookedtickets_customer", controller.bookedtickets_customer);

router.get("/booked_customers", controller.booked_customers);

export default router;
