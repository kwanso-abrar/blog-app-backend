export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  jwtExpiry: process.env.JWT_EXPIRY,
  jwtSecret: process.env.JWT_SECRET_KEY,
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    type: process.env.DB_TYPE,
    database: process.env.DB_NAME,
    entities: ['dist/**/**/*.entity{.ts,.js}'],
    password: process.env.DB_PASSWORD,
    username: process.env.DB_USER,
    migrations: ['dist/migrations/*.{js,ts}'],
    synchronize: false,
    autoLoadEntities: true,
  },
});
