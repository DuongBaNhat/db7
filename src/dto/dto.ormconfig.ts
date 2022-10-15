import { Address } from "src/address/add.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { User } from "../users/user.entity";

export const userconfig: MysqlConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'mydb7',
    entities: [User, Address],
    synchronize: true,
}

