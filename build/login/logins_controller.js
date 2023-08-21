"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_model_1 = __importDefault(require("./login_model"));
let login = async function (req, res) {
    try {
        let userName = req.body.user_name;
        let password = req.body.user_password;
        let { rows } = await login_model_1.default.userExistance(userName);
        if (rows.length != 0) {
            if (rows[0].user_password != password) {
                console.log("if state");
                res.send("Incorrect password");
                return;
            }
            req.session.isLogin = true;
            req.session.role = rows[0].role;
            res.send("Welcome back...");
        }
        else {
            console.log("not found");
            req.session.isLogin = false;
            res.send("user not found");
        }
    }
    catch {
        res.send("user not found");
    }
};
exports.default = { login };
