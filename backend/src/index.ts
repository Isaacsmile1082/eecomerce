import User from './entity/User'
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  host: "db",
  port: 3306,
  username: "root",
  password: "pass",
  database: "eecomerce",
  entities: [
      User
  ],
  synchronize: true,
  logging: false,
  migrations: {}
}).then(connection => {
  console.log('Database connected')
}).catch(error => console.log(error));