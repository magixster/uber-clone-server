import { ConnectionOptions } from 'typeorm';

const connectionOptions: ConnectionOptions = {
  type: "postgres",
  database: 'kuber',
  synchronize: true,
  logging: true,
  entities: [
    "entities/**/*.*"
  ],
  host: process.env.DB_ENDPOINT,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}

export default connectionOptions;