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

// var options = {
//     explorer: true,
//     swaggerOptions: {
//         urls: [
//           {
//             url: 'http://127.0.0.1:3001/getTask',
//             name: 'Spec1'
//           },
//           {
//             url: 'http://petstore.swagger.io/v2/swagger.json',
//             name: 'Spec2'
//           }
//         ]
//       }
//   };

const options = {
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
    apis: ["./routes/*.ts"],
  };
  
  const specs = swaggerDocument(options);
  app.use(
    "/api-docs",
    swaggerui.serve,
    swaggerui.setup(specs,{explorer:true}),
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
