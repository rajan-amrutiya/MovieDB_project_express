import model, { cityDetail } from './cities_model';
import { Request, Response } from 'express';

let getCities = async (req: Request, res: Response): Promise<void> => {
    try {
        let { rows } = await model.getCity();
        res.send(rows)
    } catch {
        res.send("data not found")
    }
};

let addCity = async (req: Request, res: Response): Promise<void> => {
    try {
        let body:cityDetail = req.body;
        
        let response = await model.createCity(body);
        res.send("Added city");
    } catch {
        res.send("City already exists")
    };
};

let updateCity = async (req: Request, res: Response): Promise<void> => {
    try {
        let body: cityDetail = req.body;
        let cityid: string = req.params.cityid;
        let responce = await model.updateCity(body, cityid)
        res.send("Updated ")
    } catch {
        res.send("Could not update city")
    };
};

let deleteCity = async (req: Request, res: Response): Promise<void> => {
    try {
        let cityid: string = req.params.cityid;
        let responce = await model.removeCity(cityid);
        res.send("Deleted ");
    } catch {
        res.send("Could not delete city")
    }
}
export default { getCities, addCity, updateCity, deleteCity }