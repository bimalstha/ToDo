import { DataSource } from "typeorm";

export const dbSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: parseInt(process.env.PORT),
    username: "root",
    password: "",
    database: "userlogin",
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
});
