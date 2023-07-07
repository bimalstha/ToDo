import { Request, Response } from "express";
import nodemailer = require("nodemailer");

export const main = async (req: Request, res: Response) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: "dusty.kunze87@ethereal.email",
      pass: "QSUncu5VS7fzzEac9U",
    },
  });

  let info = await transporter.sendMail({
    from: '"Fred foo " <foo@example.com>',
    to: "bar@example.com",
    subject: "hello its me bimal",
  });
  console.log("message is ", info.messageId);
  res.json(info);
};
