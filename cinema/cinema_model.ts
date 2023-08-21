import { QueryResult } from 'pg';
import client from '../connectionPG';

function getCinema (): Promise<QueryResult> {
    let pgQuery: string = `select * from cinema`;
    return client.query(pgQuery);
};

export interface cinemaDetails {
    code : string;
    name: string;
    city_id: number;
    address: string;
};

function createCinema (body: cinemaDetails): Promise<QueryResult> {
    let pgQuery = `INSERT INTO cinema(code, name, city_id,address) VALUES ($1,$2,$3,$4)`
    return client.query(pgQuery, [body.code, body.name, body.city_id, body.address])
}

function updateCinema(body: cinemaDetails, cinemaCode: string): Promise<QueryResult> {
    let pgQuery = `UPDATE cinema SET name = $1,address= $2 WHERE code = $3`;
    return client.query(pgQuery, [body.name, body.address, cinemaCode]);
}

function removeCinema(cinemaCode: string): Promise<QueryResult> {
    let pgQuery = `DELETE FROM cinema WHERE code = '${cinemaCode}'`;
    return client.query(pgQuery);
}
export default { getCinema, createCinema, updateCinema, removeCinema}