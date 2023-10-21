import pg from 'pg';


async function conectaDataBase(){
  console.log(process.env.DB_CONNECTION_STRING);
  pg.connect(process.env.DB_CONNECTION_STRING);
  return pg.connection;
};

export default conectaDataBase;