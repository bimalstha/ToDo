import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

import { dbSource } from "../connection/connection";
import { User } from "../entities/user.entities";
import { hashPassword, verifyPassword } from "../utilites/hashPassword";
import { userValidator } from "../validatior/user_data.validator";

dotenv.config();

const userRepository = dbSource.getRepository(User);

export const registerUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    let bodyUser = await userRepository.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    userValidator.parse(req.body); //validating entered data

    // checking if userName already exists
    if (bodyUser !== null) {
      throw { message: "user already registered" };
    }

    req.body.password = await hashPassword(req.body.password); //password changed to hashed password
    const userbody = req.body;
    const userMap = userRepository.create(userbody);
    await userRepository.save(userMap);
    return res.send({ msg: "user created" });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .send({ msg: error?.detail || "u got an error while adding user" });
  }
};

export const login = async (req: Request, res: Response): Promise<Response> => {
  try {
    const user = await userRepository.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    if (user) {
      const x = await verifyPassword(req.body.password, user.password); //verify password
      if (x) {
        const token = jwt.sign({ id: user.userId }, process.env.SECRET_KEY); // { expiresIn: '1d' }
        res.cookie("jwt", token, { httpOnly: true }).send({
          token: token,
          msg: "login successful",
        });
      } else {
        return res.status(404).send({ msg: "invalid credentials" });
      }
    } else {
      return res.status(404).send({ msg: "invalid credentials" });
    }
  } catch (error) {
    res.status(404).send({ msg: "404 not found" });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const specificUser = await userRepository.findOne({
      where: {
        userName: req.body.userName,
      },
    });
    if (specificUser) {
      await userRepository.remove(specificUser);
    }
    return res.send({ msg: "user deleted" });
  } catch (error) {
    return res.send({ msg: "error" });
  }
};

export const getUserById = async (userId: string) => {
  const user = userRepository.find({
    where: {
      userId,
    },
  });
  if (user) {
    return user;
  }
  throw new Error("User with the id doesn't exist");
};
