async function connect(){

    try {
        if(global.connection)
            return global.connection.connect();

        const { Pool } = require("pg");
        const pool = new Pool({
            connectionString: process.env.CONNECTION_STRING
        });
        const client = await pool.connect();
        console.log("Pool criada");

        const res = await client.query("select now()");
        console.log(res.rows[0]);
        client.release();

        global.connection = pool;
        return pool.connect();
    }
    catch (error){
        throw error; 
    }
}

connect()
    .then(() => console.log("Conexão bem-sucedida"))
    .catch((error) => console.error("Erro durante a conexão:", error));

async function selectLoginMorador(email,senha){
    const client = await connect();
    const res = await client.query("SELECT * FROM Morador WHERE email=$1 AND senha=$2",[email, senha]);
    return res.rows;
}

async function selectVerificarMorador(email){
    const client = await connect();
    const res = await client.query("SELECT * FROM Morador WHERE email=$1",[email]);
    return res.rows;
}

async function insertMorador(morador){
    const client = await connect();
    const sql = "INSERT INTO Morador(email,senha,nome_completo,residencia,telefone,criada_em,id_condominio) VALUES ($1,$2,$3,$4,$5,$6,$7)";
    const values = [morador.email, morador.senha,morador.nome_completo, morador_residencia, morador_telefone, morador.criada_em,morador.id_condominio];
    await client.query(sql,values);
}

async function updateMorador(id,morador){
    const client = await connect();
    const sql = "INSERT Morador SET email=$1,senha=$2,nome_completo=$3,residencia=$4,telefone=$5,criada_em=$6,id_condominio=$7 WHERE id=$8";
    const values = [morador.email, morador.senha,morador.nome_completo, morador_residencia, morador_telefone, morador.criada_em,morador.id_condominio, id];
    await client.query(sql,values);
}

async function deleteMorador(id){
    const client = await connect();
    await client.query("DELETE FROM Morador WHERE id=$1", [id]);
}

module.exports = {
    selectLoginMorador,
    selectVerificarMorador,
    insertMorador,
    updateMorador,
    deleteMorador
}