import { DataSource } from "typeorm";

export const dbSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: parseInt(process.env.DBPORT),
    username: "postgres",
    password:"pass",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: ["src/entities/**/*.ts"],
});
