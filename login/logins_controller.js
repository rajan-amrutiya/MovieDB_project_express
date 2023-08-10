const { json, request } = require("express");
const model = require("./login_model");
const session = require("express-session"); 

let login = async function (req, res) {
    try {
        let userName = req.body.user_name;
        let password = req.body.user_password;
        
        let { rows } = await model.userExistance(userName);
        if (rows.length != 0) {
            if(rows[0].user_password != password){
                return res.send("Incorrect password");
            }
            req.session.isLogin = true;
            req.session.role = rows[0].role;
            
            res.send("Welcome back...");
        }else{
            req.session.isLogin = false;
            res.send("user not found")
        }
    } catch {
        res.send("user not found");
    }
};

module.exports = { login };