import condominio from "../models/Condominio.js";

class CondominioController{
    static async listarCondominios(req, res){
        try {
            const listaCondominios = await condominio.find({})
            res.status(200).json(listaCondominios);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao listar Condominios`
            })
        }
    }

    static async listarCondominioPorNome(req, res) {
        try {
            const condominio = req.query.nome;
            const condominioEncontrado = await livro.find({nome : nome});
            res.status(200).json(condominioEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao encontrar condominio por nome`
            })
        }

    }
}

export default CondominioController;