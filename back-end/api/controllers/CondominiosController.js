const database = require('../models');

class CondominiosController{
    static async selectAllCondominios(req,res){
        try{
            const condominios = await database.Condominios.findAll();
            return res.status(200).json(condominios);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    };
    static async selectCondominio(req,res){
        const { id } = req.params;
        try{
            const condominio = await database.Condominios.findOne( {
                 where  : {
                     id: Number(id) 
                    }
                });
            return res.status(200).json(condominio);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async insertCondominio(req,res){
        const condominio = req.body;
        try{
            const condominioCriado = await database.Condominios.create(condominio);
            return res.status(200).json(condominioCriado);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateCondominio(req,res){
        const { id } = req.params;
        const newData = req.body;
        try{
            await database.Condominios.update(newData, {
                where:{
                    id: Number(id)
                }
            });
            const condominioAtt = await database.Condominios.findOne( {
                where  : {
                    id: Number(id) 
                   }
               });
            return res.status(200).json(condominioAtt);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteCondominio(req,res){
        const { id } = req.params;
        try{
            await database.Condominios.destroy({
                where:{
                    id: Number(id)
                }
            });
            return res.status(200).json('OK');
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }
};

module.exports = CondominiosController;