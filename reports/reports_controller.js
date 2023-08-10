const model = require("./reports_model");

let movielistByCity = async function(req, res){
    try {
        let cityname = req.params.cityname;
        let { rows } = await model.movielistByCityQuery(cityname);
        res.send(rows);
    } catch {
        res.send("Data not found");
    };
};

let selectCinema = async function (req, res){
    try {
        let cinemaName = req.params.cinemaname;    
        let { rows } = await model.selectCinemaQuery(cinemaName);
        res.send(rows);
    } catch {
        res.send("Data not found")
    };
};

let selectMovie = async function (req, res){
    try {
        let movieName = req.params.moviename;
        let { rows } = await model.selectMovieQuery(movieName)
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let seatingPlan = async function (req, res){
    try {
        let cityName = req.body.cityName;
        let movieName = req.body.movieName;
        let cinema = req.body.cinema;
        let cinema_hall = req.body.cinemaHall;
   
        let { rows } = await model.seatingPlanQuery(cityName, movieName, cinema, cinema_hall);
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let top10actors = async function (req, res){
    try {      
        let { rows } = await model.top10actorsQuery();
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let movieYear = async function (req, res){
    try {
        let year = req.params.year;
        let { rows } = await model.movieYearQuery(year);
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let top10customers = async function (req, res){
    try {
        let { rows } = await model.top10customersQuery();
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let totalbookings = async function(req, res){
    try {
        let { rows } = await model.totalbookingsQuery();
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

let bookedtickets_customer = async function (req, res){
    try {
        let { rows } = await model.bookedtickets_customer_Query()
        res.json(rows);
    } catch {
        res.send("DAta not found");
    };
};

let booked_customers = async function (req, res){
    try {
        let movie = req.body.movieName;
        let cinema_hall = req.body.cinemaHall;
        let { rows } = await model.booked_customers_Query(movie,cinema_hall);
        res.json(rows);
    } catch {
        res.send("Data not found");
    };
};

module.exports = { movielistByCity,
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