import express from 'express';
import session from 'express-session';
import * as redis from 'redis';
import RedisStore from 'connect-redis';
import { ValidationError } from 'express-validation';
import {Request, Response} from 'express'
const app = express();
const redisClient = redis.createClient();

(async function () {
    await redisClient.connect();
})();

let redisStore = new RedisStore({
    client: redisClient
});

app.use(session({
    store: redisStore,
    secret: "This-is-secret",
    resave: false,
    saveUninitialized: false,
    // cookie: { expires: 10000 }
}));

function checkLogin(req: Request, res: Response, next: Function) {
    if (req.session.isLogin == true) {
        next();
    } else {
        res.sendStatus(401);
    }
};

import routeLogin from './login/login_route'
import routeCinema from './cinema/cinema_route';
import routeCities from './cities/cities_route';
import routeReports from './reports/reports_route';
import check from './checkAdminOrUser';

app.use(express.json());

app.use("/login", routeLogin);
app.use("/cities", checkLogin, routeCities);
app.use("/cinema", checkLogin,routeCinema);
app.use("/", checkLogin, check.isAdmin, routeReports);

app.post("/logout", (req, res) => {
    req.session.destroy((error)=>{
        if(error){
            res.status(500);
        }else{
            res.send("logged out ");
        }
    });
});

app.use(function (err: Error, req: Request, res: Response, next: Function){
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err.details.body);
    }
    return res.status(500).json(err);
});

app.listen(8888);