"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionPG_1 = __importDefault(require("../connectionPG"));
function userExistance(userName) {
    let query = `select user_name, user_password, role from users where user_name = $1`;
    return connectionPG_1.default.query(query, [userName]);
}
exports.default = { userExistance };
