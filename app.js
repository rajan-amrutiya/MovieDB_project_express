const express = require("express");
const app = express();
const session = require("express-session");
const redis = require("redis");
const redisClient = redis.createClient();
const RedisStore = require("connect-redis").default;
const { validate, ValidationError, Joi } = require("express-validation");

(async function () {
    await redisClient.connect();
})();

let redisStore = new RedisStore({
    client: redisClient
});

function checkLogin(req, res, next) {
    if (req.session.isLogin == true) {
        next();
    } else {
        res.sendStatus(401);
    }
};

const routeLogin = require("./login/login_route")
const routeCities = require("./cities/cities_route");
const routeCinema = require("./cinema/cinema_route");
const routeReports = require("./reports/reports_route");
const routeLogout = require("./logout/logout")
const check = require("./checkAdminOrUser");

app.use(express.json());

app.use(session({
    store: redisStore,
    secret: "This-is-secret",
    resave: false,
    saveUninitialized: false,
    // cookie: { expires: 10000 }
}));

app.use("/login", routeLogin)
app.use("/cities", checkLogin, routeCities);
app.use("/cinema", checkLogin, routeCinema);
app.use("/", checkLogin, check.isAdmin, routeReports);

app.post("/logout", (req, res) => {
    req.session.destroy();
    res.send("logged out ")
});
app.use(function (err, req, res, next) {
    if (err instanceof ValidationError) {
        return res.status(err.statusCode).json(err.details.body)
    }
    return res.status(500).json(err)
});

app.listen(8888);
