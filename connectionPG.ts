// const { Client } = require("pg");
import {Client} from 'pg';

const client = new Client({
    user: "postgres",
    host:"localhost",
    database:"cinema",
    password: "r123",
    port:5432
});

client.connect();

export default client