import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";
import * as cookieParser from "cookie-parser";
import * as swaggerui from "swagger-ui-express";
import * as swaggerDocument from "swagger-jsdoc";

import { dbSource } from "./connection/connection";
import userRoutes from "./routes/user.route";
import taskRoutes from "./routes/task.route";

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
app.use(cors());
app.use(express.json());
app.use(cookieParser());
dotenv.config();
dbSource.initialize();
app.use(userRoutes);
app.use(taskRoutes);
//app.use("/api-docs", swaggerui.serve, swaggerui.setup(specs));

app.listen(process.env.PORT, () => {
  console.log("the server is working at " + process.env.PORT);
});
