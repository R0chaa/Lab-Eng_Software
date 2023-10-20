// Adicione logs de depuração para verificar o funcionamento correto das funções

async function selectLoginMorador(email, senha) {
    console.log('Executando selectLoginMorador...');
    const res = await query("SELECT * FROM Morador WHERE email=? AND senha=?", [email, senha]);
    console.log('Resultado de selectLoginMorador:', res);
    return res;
}

// Repita o padrão para as outras funções...

// Adicione logs para o caso de erro

connect()
    .then(() => console.log("Conexão bem-sucedida"))
    .catch((error) => console.error("Erro durante a conexão:", error));

// Exemplo de uso das funções
async function testFunctionality() {
    try {
        const morador = {
            email: 'example@example.com',
            senha: 'password',
            nome_completo: 'Nome Sobrenome',
            residencia: 'Endereço',
            telefone: '1234567890',
            criada_em: new Date(),
            id_condominio: 1
        };

        await insertMorador(morador);
        console.log('Morador inserido com sucesso.');

        const updatedMorador = { ...morador, nome_completo: 'Novo Nome' };
        await updateMorador(1, updatedMorador);
        console.log('Morador atualizado com sucesso.');

        const selectedMorador = await selectVerificarMorador('example@example.com');
        console.log('Morador selecionado:', selectedMorador);

        await deleteMorador(1);
        console.log('Morador deletado com sucesso.');
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

testFunctionality();
