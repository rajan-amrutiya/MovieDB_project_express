const model = require("./cities_model");

let getCities = async function(req, res){
    try {
        let { rows } = await model.getCity();
        res.send(rows)
    } catch {
        res.send("data not found")
    }
};

let addCity = async function (req, res) {
    try {
        let body = req.body;
        let response = await model.createCity(body);
        res.send("Added city");
    } catch {
        res.send("City already exists")
    };
};

let updateCity = async function (req, res){
    try {
        let body = req.body;
        let cityid = req.params.cityid;
        let responce = await model.updateCity(body,cityid)
        res.send("Updated ")
    } catch {
        res.send("Could not update city")
    };
};

let deleteCity = async function (req, res){
    try {
        let cityid = req.params.cityid;
        let responce = await model.removeCity(cityid);
        res.send("Deleted ");
    }catch{
        res.send("Could not delete city")
    }
}
module.exports = {getCities, addCity, updateCity, deleteCity}