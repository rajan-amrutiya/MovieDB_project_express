"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionPG_1 = __importDefault(require("../connectionPG"));
function getCity() {
    let query = `select * from city`;
    return connectionPG_1.default.query(query);
}
;
function createCity(body) {
    let query = `INSERT INTO city(name, state) VALUES ($1,$2)`;
    return connectionPG_1.default.query(query, [body.name, body.state]);
}
;
function updateCity(body, cityid) {
    let query = `UPDATE city SET name = $1,state= $2 WHERE id = ${cityid}`;
    return connectionPG_1.default.query(query, [body.name, body.state]);
}
;
function removeCity(cityid) {
    let query = `DELETE FROM city WHERE id = ${cityid}`;
    return connectionPG_1.default.query(query);
}
;
exports.default = { getCity, createCity, updateCity, removeCity };
