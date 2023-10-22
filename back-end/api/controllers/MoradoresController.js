const database = require('../models');

class MoradoresController{
    static async selectAllMoradores(req,res){
        try{
            const Moradores = await database.Moradores.findAll();
            return res.status(200).json(Moradores);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    };
    static async selectMorador(req,res){
        const { id } = req.params;
        try{
            const Morador = await database.Moradores.findOne( {
                 where  : {
                     id: Number(id) 
                    }
                });
            return res.status(200).json(Morador);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async insertMorador(req,res){
        const Morador = req.body;
        try{
            const MoradorCriado = await database.Moradores.create(Morador);
            return res.status(200).json(MoradorCriado);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateMorador(req,res){
        const { id } = req.params;
        const newData = req.body;
        try{
            await database.Moradores.update(newData, {
                where:{
                    id: Number(id)
                }
            });
            const MoradorAtt = await database.Moradores.findOne( {
                where  : {
                    id: Number(id) 
                   }
               });
            return res.status(200).json(MoradorAtt);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteMorador(req,res){
        const { id } = req.params;
        try{
            await database.Moradores.destroy({
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

module.exports = MoradoresController;