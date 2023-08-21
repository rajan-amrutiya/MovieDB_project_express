import { QueryResult } from "pg";
import client from "../connectionPG";

function userExistance(userName: string): Promise<QueryResult>{
    let query = `select user_name, user_password, role from users where user_name = $1`;
    return client.query(query, [userName]);
}
export default {userExistance};