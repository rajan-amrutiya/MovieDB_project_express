import model from './login_model';
import { Request, Response } from 'express';

declare module "express-session" {
    interface SessionData {
        isLogin: boolean;
        role: string;
    }
}

let login = async function (req: Request, res: Response): Promise<void> {
    try {
        let userName: string = req.body.user_name;
        let password: string = req.body.user_password;

        let { rows } = await model.userExistance(userName);

        if (rows.length != 0) {

            if (rows[0].user_password != password) {
                console.log("if state");
                res.send("Incorrect password");
                return
            }
            req.session.isLogin = true;
            req.session.role = rows[0].role;

            res.send("Welcome back...");
        } else {
            console.log("not found");

            req.session.isLogin = false;
            res.send("user not found")
        }
    } catch {
        res.send("user not found");
    }
};

export default { login };