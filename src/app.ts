import * as  express from "express";
import * as  dotenv from "dotenv";
import * as  cors from "cors";
import * as cookieParser from "cookie-parser";



import { dbSource } from "./connection/connection";
import userRoutes from "./routes/user.route";
import taskRoutes from "./routes/task.route";


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


app.listen(process.env.PORT, () => {
    console.log('the server is working at ' + process.env.PORT);
})