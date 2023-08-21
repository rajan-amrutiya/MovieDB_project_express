import { QueryResult } from "pg";
import client from "../connectionPG";

function getCity (): Promise<QueryResult>{
    let query: string = `select * from city`;
    return client.query(query);
};

export interface cityDetail {
    name: string;
    state: string
}
function createCity(body: cityDetail): Promise<QueryResult>{
    let query: string = `INSERT INTO city(name, state) VALUES ($1,$2)`;
    return client.query(query, [body.name, body.state]);
};

function updateCity(body: cityDetail, cityid: string): Promise<QueryResult>{
    let query: string = `UPDATE city SET name = $1,state= $2 WHERE id = ${cityid}`;
    return client.query(query, [body.name, body.state]);
};

function removeCity(cityid: string): Promise<QueryResult>{
    let query: string = `DELETE FROM city WHERE id = ${cityid}`;
    return client.query(query);
};
export default {getCity, createCity, updateCity, removeCity}