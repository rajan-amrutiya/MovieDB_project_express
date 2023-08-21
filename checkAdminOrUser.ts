import {Request, Response} from 'express';

function isAdmin(req: Request, res: Response, next: Function){
    if(req.session.role != "admin"){
       return res.send("You are not authorize")
    }else{
        next();
    };
};

export default {isAdmin};