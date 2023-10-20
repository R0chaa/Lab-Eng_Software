const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  connectionLimit: 10,
  user: process.env.RDS_USERNAME,
  host: process.env.RDS_HOSTNAME,
  database: process.env.RDS_DB_NAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  connectTimeout: 20000,
});

const query = util.promisify(pool.query).bind(pool);

async function selectLoginMorador(email, senha) {
    const res = await query("SELECT * FROM Morador WHERE email=? AND senha=?", [email, senha]);
    return res;
}

async function selectVerificarMorador(email) {
    const res = await query("SELECT * FROM Morador WHERE email=?", [email]);
    return res;
}

async function insertMorador(morador) {
    const sql = "INSERT INTO Morador(email, senha, nome_completo, residencia, telefone, criada_em, id_condominio) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [morador.email, morador.senha, morador.nome_completo, morador.residencia, morador.telefone, morador.criada_em, morador.id_condominio];
    await query(sql, values);
}

async function updateMorador(id, morador) {
    const sql = "UPDATE Morador SET email=?, senha=?, nome_completo=?, residencia=?, telefone=?, criada_em=?, id_condominio=? WHERE id=?";
    const values = [morador.email, morador.senha, morador.nome_completo, morador.residencia, morador.telefone, morador.criada_em, morador.id_condominio, id];
    await query(sql, values);
}

async function deleteMorador(id) {
    await query("DELETE FROM Morador WHERE id=?", [id]);
}

module.exports = {
    selectLoginMorador,
    selectVerificarMorador,
    insertMorador,
    updateMorador,
    deleteMorador
};
