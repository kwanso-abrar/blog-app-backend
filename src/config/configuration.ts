export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    type: process.env.DB_TYPE,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [],
    migrations: ['./src/migrations/*.{js,ts}'],
    autoLoadEntities: true,
    synchronize: false,
  },
});
