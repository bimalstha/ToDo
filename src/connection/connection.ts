import { DataSource } from "typeorm";

export const dbSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: parseInt(process.env.DBPORT),
    username: "root",
    password:"pass",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
});
