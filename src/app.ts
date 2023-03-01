import * as  express from "express";
import * as  dotenv from "dotenv";
import * as  cors from "cors";
import * as cookieParser from "cookie-parser";
// import * as  swaggerUi from 'swagger-ui-express';
// import * as swaggerJsdoc from 'swagger-jsdoc'


import { dbSource } from "./connection/connection";
import userRoutes from "./routes/user.route";
import taskRoutes from "./routes/task.route";

//swagger
// const options = {
//     failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
//     definition: {
//         openapi: '3.0.0',
//         info: {
//             title: 'Hello World',
//             version: '1.0.0',
//         },
//     },
//     apis: ['./src/controllers/*{.ts,.js}'],
// };

// const openapiSpecification = swaggerJsdoc(options);

const app = express();

// Middlewares
app.use(cors({
    origin: ["*"]
}));
app.use(express.json());
app.use(cookieParser());
dotenv.config();
dbSource.initialize()
app.use(userRoutes);
app.use(taskRoutes);

// app.use('/api-docs', swaggerUi.serve);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openapiSpecification));

app.listen(process.env.PORT, () => {
    console.log('the server is working at ' + process.env.PORT);
})