import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
    let { cookie } = req.headers;    //authorization from bearer token
    console.log("headers", req.headers);
    if (cookie) {
        let a = cookie.split("jwt=")[1];    //extracting token from bearer
        console.log("a", a);
        let id = jwt.verify(a, process.env.SECRET_KEY); 
        // console.log("'id'",id);
        // console.log(id["id"]);   
        req.body.user = id["id"];        //adding user in the req.body
        next();                         //calling next function 
    }
    else {
        res.status(401).send({ msg: "u are not authorized" });
    }
}