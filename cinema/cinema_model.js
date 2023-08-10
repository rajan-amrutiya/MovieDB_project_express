const client = require("../connectionPG");

function getCinema (){
    let pgQuery = `select * from cinema`;
    return client.query(pgQuery);
};

function createCinema (body){
    let pgQuery = `INSERT INTO cinema(code, name, city_id,address) VALUES ($1,$2,$3,$4)`
    return client.query(pgQuery, [body.code, body.name, body.city_id, body.address])
}

function updateCinema(body, cinemaCode){
    let pgQuery = `UPDATE cinema SET name = $1,address= $2 WHERE code = $3`;
    return client.query(pgQuery, [body.name, body.address, cinemaCode]);
}

function removeCinema(cinemaCode){
    let pgQuery = `DELETE FROM cinema WHERE code = '${cinemaCode}'`;
    return client.query(pgQuery);
}
module.exports = { getCinema, createCinema, updateCinema, removeCinema}