import model from './reports_model';
import { Request, Response } from 'express';

let movielistByCity = async (req: Request, res: Response): Promise<void> =>{
    try {
        let cityname: string = req.params.cityname;
        let { rows } = await model.movielistByCityQuery(cityname);
        res.send(rows);
    } catch {
        res.send("Data not found");
    };
};

let selectCinema = async (req: Request, res: Response): Promise<void> =>{
    try {
        let cinemaName: string = req.params.cinemaname;    
        let { rows } = await model.selectCinemaQuery(cinemaName);
        res.send(rows);
    } catch {
        res.send("Data not found")
    };
};

let selectMovie = async (req: Request, res: Response): Promise<void> =>{
    try {
        let movieName: string = req.params.moviename;
        let { rows } = await model.selectMovieQuery(movieName)
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let seatingPlan = async (req: Request, res: Response): Promise<void> =>{
    try {
        let body: any = req.body;
   
        let { rows } = await model.seatingPlanQuery(body);
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let top10actors = async (req: Request, res: Response): Promise<void> =>{
    try {      
        let { rows } = await model.top10actorsQuery();
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let movieYear = async (req: Request, res: Response): Promise<void> =>{
    try {
        let year: string = req.params.year;
        let { rows } = await model.movieYearQuery(year);
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let top10customers = async (req: Request, res: Response): Promise<void> =>{
    try {
        let { rows } = await model.top10customersQuery();
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let totalbookings = async (req: Request, res: Response): Promise<void> =>{
    try {
        let { rows } = await model.totalbookingsQuery();
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let bookedtickets_customer = async (req: Request, res: Response): Promise<void> =>{
    try {
        let { rows } = await model.bookedtickets_customer_Query()
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let booked_customers = async (req: Request, res: Response): Promise<void> =>{
    try {
        let body: any = req.body;
        let { rows } = await model.booked_customers_Query(body);
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

export default { movielistByCity,
                   selectCinema,
                   selectMovie,
                   seatingPlan,
                   top10actors,
                   movieYear,
                   top10customers,
                   totalbookings,
                   bookedtickets_customer,
                   booked_customers
                }