import * as express from "express";
import * as dotenv from "dotenv";
import * as cors from "cors";

import { dbSource } from "./connection/connection";
import userRoutes from "./routes/user.route";
import taskRoutes from "./routes/task.route";

const app = express();

// Middlewares
app.use(cors())
app.use(express.json())
dotenv.config();
dbSource.initialize()
app.use(userRoutes);
app.use(taskRoutes);


app.listen(process.env.PORT, () => {
    console.log('the server is working at ' + process.env.PORT);
})