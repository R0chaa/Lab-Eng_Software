import Sequelize from'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { RDS_HOSTNAME, RDS_PORT, RDS_DB_NAME, RDS_USERNAME, RDS_PASSWORD } = process.env;

const sequelize = new Sequelize({
      database: RDS_DB_NAME,
      username: RDS_USERNAME,
      password: RDS_PASSWORD,
      host: RDS_HOSTNAME,
      port: RDS_PORT,
      dialect: 'postgres',
});


export default sequelize;
