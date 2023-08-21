"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionPG_1 = __importDefault(require("../connectionPG"));
function getCinema() {
    let pgQuery = `select * from cinema`;
    return connectionPG_1.default.query(pgQuery);
}
;
;
function createCinema(body) {
    let pgQuery = `INSERT INTO cinema(code, name, city_id,address) VALUES ($1,$2,$3,$4)`;
    return connectionPG_1.default.query(pgQuery, [body.code, body.name, body.city_id, body.address]);
}
function updateCinema(body, cinemaCode) {
    let pgQuery = `UPDATE cinema SET name = $1,address= $2 WHERE code = $3`;
    return connectionPG_1.default.query(pgQuery, [body.name, body.address, cinemaCode]);
}
function removeCinema(cinemaCode) {
    let pgQuery = `DELETE FROM cinema WHERE code = '${cinemaCode}'`;
    return connectionPG_1.default.query(pgQuery);
}
exports.default = { getCinema, createCinema, updateCinema, removeCinema };
