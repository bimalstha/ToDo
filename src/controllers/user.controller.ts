import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { dbSource } from "../connection/connection";
import { User } from "../entities/user.entities";
import { hashPassword, verifyPassword } from "../utilites/hashPassword";
import { userValidator } from "../validatior/data.validator";


const userRepository = dbSource.getRepository(User);


export const getUser = async (req: Request, res: Response): Promise<Response> => {
    const specificUser = await userRepository.findOne({
        where: {
            userName: req.body.userName,
        }
    });
    console.table(specificUser);
    return res.send(specificUser);
}

export const addUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        let bodyUser = await userRepository.findOne({
            where: {
                userName: req.body.userName,
            }
        });
        userValidator.parse(req.body);      //validating entered data
        // checking if userName already exists
        if (bodyUser !== null) {
            throw { message: "user already registered" };
        };
        req.body.password = await hashPassword(req.body.password);    //password changed to hashed password
        const userbody = req.body;
        console.log("userbody", userbody);
        const userMap = userRepository.create(userbody);
        await userRepository.save(userMap);
        console.log("usermap", userMap);
        return res.send({ msg: "user created" });
    } catch (error) {
        console.log(error)
        return res.status(500).send({ msg: error?.message || "u got an error" });
    }
}

export const login = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await userRepository.findOne({
            where: {
                userName: req.body.userName
            }
        });
        console.log(user);
        if (user) {
            const x = await verifyPassword(req.body.password, user.password);
            console.log(x);
            if (x) {
                return res.send({ msg: "login successful" });
            } else {
                return res.send({ msg: "invalid credentials" });
            }
        } else {
            return res.send({ msg: "invalid credentials" });
        }
    } catch (error) {
        res.status(404).send({ msg: "404 not found" });
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const specificUser = await userRepository.find({
            where: {
                userName: req.body.userName,
            }
        });
        if (specificUser.length > 0) {
            await userRepository.remove(specificUser);
        }
        return res.send({ msg: "user deleted" });
    } catch (error) {
        return res.send({ msg: "error" })
    }
}


export const sendJwt = async (req: Request, res: Response): Promise<Response> => {
    try {
        const token = jwt.sign("bimal", "shrestha");
        console.log("token");
        return res.send(token)
    } catch (error) {
        console.log(error)
    }
}