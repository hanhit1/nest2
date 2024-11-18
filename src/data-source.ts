import { DataSource } from "typeorm";
import { Users } from './users/user.entity';
export const AppDataSource = new DataSource({
    type: "mongodb", 
    host: "localhost",
    port: 27017, 
    username: "hanhpro", 
    password: "152004", 
    database: "test", 
    synchronize: false,
    logging: true,
    entities: [Users],  
    migrations: [__dirname + "/migrations/*.ts"], 
});