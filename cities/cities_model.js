const client = require("../connectionPG");

function getCity (){
    let query = `select * from city`;
    return client.query(query);reateCity
};

function createCity(body){
    let query = `INSERT INTO city(name, state) VALUES ($1,$2)`;
    return client.query(query, [body.name, body.state]);
};

function updateCity(body,cityid){
    let query = `UPDATE city SET name = $1,state= $2 WHERE id = ${cityid}`;
    return client.query(query, [body.name, body.state]);
};

function removeCity(cityid){
    let query = `DELETE FROM city WHERE id = ${cityid}`;
    return client.query(query);
};
module.exports = {getCity, createCity, updateCity, removeCity}