import 'reflect-metadata';
import {DataSource} from 'typeorm';
import User from './entity/User';




export default new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'root',
  password: 'pass',
  database: 'eecomerce',
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});
