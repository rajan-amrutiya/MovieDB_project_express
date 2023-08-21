"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const { Client } = require("pg");
const pg_1 = require("pg");
const client = new pg_1.Client({
    user: "postgres",
    host: "localhost",
    database: "cinema",
    password: "r123",
    port: 5432
});
client.connect();
exports.default = client;
