import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as swaggerui from "swagger-ui-express";
import * as swaggerDocument from "swagger-jsdoc";
//import * as stripe from "stripe"; //for payment


import { dbSource } from "./connection/connection";
import userRoutes from "./routes/user.route";
import taskRoutes from "./routes/task.route";
import { main } from "./utilites/nodemailer";
import path = require("path");

const app = express();

//defining the API's root information
const swaggerDefinition = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LogRocket Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3001",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};
const specs = swaggerDocument(swaggerDefinition);
//route for the swagger documentation information page
app.use(
  "/api-docs",
  swaggerui.serve,
  swaggerui.setup(specs, { explorer: true })
);

// Middlewares
app
  .use(
    cors({
      origin: "http://localhost:5173",
      credentials: true,
    })
  )
  .use(express.json())
  .use(cookieParser())
  .use(userRoutes)
  .use(taskRoutes);

dotenv.config();
dbSource.initialize();

//app.use("/api-docs", swaggerui.serve, swaggerui.setup(specs));
//api to use nodemailer
// app.get("/send-mail", main);

app.listen(process.env.PORT, () => {
  console.log("the server is working at " + process.env.PORT);
});
