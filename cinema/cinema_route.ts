import express from 'express';
const router = express.Router();

import controller from './cinema_controller';
import check from '../checkAdminOrUser';


router.get("/getcinemas", controller.getCinemas);

router.post("/addcinema", check.isAdmin, controller.addCinema);

router.put("/updatecinema/:code", check.isAdmin, controller.updateCinema);

router.delete("/deletecinema/:code", check.isAdmin, controller.deleteCinema);

export default router;