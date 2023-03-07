import { Request, Response } from "express";
import * as jwt from "jsonwebtoken"

export const verifyJwt = (req: Request, res: Response, next: any) => {
    let { authorization } = req.headers;
    if (authorization) {
        let a = authorization.split("Bearer ")[1];    //extracting token from bearer
        let id = jwt.verify(a, process.env.SECRET_KEY); 
        console.log("'id'",id);
        console.log(id["id"]);
        req.body.user = id["id"]        //adding user in the req.body
        next();
    }
    else {
        res.status(401).send({ msg: "u are not authorized" });
    }
}