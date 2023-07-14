import { DataSource } from 'typeorm';

export default new DataSource({
  host: 'localhost',
  port: 5432,
  type: 'postgres',
  database: 'blog-app',
  password: '1234',
  username: 'postgres',
  migrations: ['./src/migrations/*{.js, .ts}'],
});
