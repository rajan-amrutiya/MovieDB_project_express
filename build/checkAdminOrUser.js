"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isAdmin(req, res, next) {
    if (req.session.role != "admin") {
        return res.send("You are not authorize");
    }
    else {
        next();
    }
    ;
}
;
exports.default = { isAdmin };
