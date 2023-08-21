"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const redis = __importStar(require("redis"));
const connect_redis_1 = __importDefault(require("connect-redis"));
const express_validation_1 = require("express-validation");
const app = (0, express_1.default)();
const redisClient = redis.createClient();
(async function () {
    await redisClient.connect();
})();
let redisStore = new connect_redis_1.default({
    client: redisClient
});
app.use((0, express_session_1.default)({
    store: redisStore,
    secret: "This-is-secret",
    resave: false,
    saveUninitialized: false,
    // cookie: { expires: 10000 }
}));
function checkLogin(req, res, next) {
    if (req.session.isLogin == true) {
        next();
    }
    else {
        res.sendStatus(401);
    }
}
;
const login_route_1 = __importDefault(require("./login/login_route"));
const cinema_route_1 = __importDefault(require("./cinema/cinema_route"));
const cities_route_1 = __importDefault(require("./cities/cities_route"));
const reports_route_1 = __importDefault(require("./reports/reports_route"));
const checkAdminOrUser_1 = __importDefault(require("./checkAdminOrUser"));
app.use(express_1.default.json());
app.use("/login", login_route_1.default);
app.use("/cities", checkLogin, cities_route_1.default);
app.use("/cinema", checkLogin, cinema_route_1.default);
app.use("/", checkLogin, checkAdminOrUser_1.default.isAdmin, reports_route_1.default);
app.post("/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            res.status(500);
        }
        else {
            res.send("logged out ");
        }
    });
});
app.use(function (err, req, res, next) {
    if (err instanceof express_validation_1.ValidationError) {
        return res.status(err.statusCode).json(err.details.body);
    }
    return res.status(500).json(err);
});
app.listen(8888);
