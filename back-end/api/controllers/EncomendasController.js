const database = require('../models');

class EncomendasController{
    static async selectAllEncomendas(req,res){
        try{
            const Encomendas = await database.Encomendas.findAll();
            return res.status(200).json(Encomendas);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    };
    static async selectEncomenda(req,res){
        const { id } = req.params;
        try{
            const Encomenda = await database.Encomendas.findOne( {
                 where  : {
                     id: Number(id) 
                    }
                });
            return res.status(200).json(Encomenda);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async insertEncomenda(req,res){
        const Encomenda = req.body;
        try{
            const EncomendaCriada = await database.Encomendas.create(Encomenda);
            return res.status(200).json(EncomendaCriada);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateEncomenda(req,res){
        const { id } = req.params;
        const newData = req.body;
        try{
            await database.Encomendas.update(newData, {
                where:{
                    id: Number(id)
                }
            });
            const EncomendaAtt = await database.Encomendas.findOne( {
                where  : {
                    id: Number(id) 
                   }
               });
            return res.status(200).json(EncomendaAtt);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteEncomenda(req,res){
        const { id } = req.params;
        try{
            await database.Encomendas.destroy({
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

module.exports = EncomendasController;