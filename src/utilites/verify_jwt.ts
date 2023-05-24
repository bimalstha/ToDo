import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken"

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
    let { authorization } = req.headers;     //authorization from bearer token
    if (authorization) {
        let a = authorization.split("Bearer ")[1];    //extracting token from bearer
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