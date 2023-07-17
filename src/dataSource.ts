import { DataSource } from 'typeorm';
import { config } from 'dotenv';

config();

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USER,
  migrations: ['./src/migrations/*.{js,ts}'],
});
