import model, { cinemaDetails } from './cinema_model';
import {Request, Response} from 'express';

let getCinemas = async (req: Request, res: Response): Promise<void> => {
    try {
        let { rows }= await model.getCinema();
        res.send(rows);
    } catch {
        res.send("Data not found");
    }
};

let addCinema = async  (req: Request, res: Response): Promise<void> =>{
    try {
        let body: cinemaDetails = req.body;
        
        let responce = await model.createCinema(body);
        res.send("Cinema added ");
    } catch {
        res.send("Could not add cinema");
    }
};

let updateCinema = async  (req: Request, res: Response): Promise<void> => {
    try {
        let body: cinemaDetails = req.body;
        let cinemaCode: string = req.params.code;
        let responce = await model.updateCinema(body, cinemaCode);
        res.json("Cinema updated ")
    } catch {
        res.send("Could not update cinema")
    };
};

let deleteCinema = async  (req: Request, res: Response): Promise<void> => {
    try {
        let cinemaCode: string = req.params.code;

        let response = await model.removeCinema(cinemaCode);
        res.json("Deleted ");
    } catch {
        res.send("Could not delete cinema")
    }
}

export default { getCinemas, addCinema, updateCinema, deleteCinema }