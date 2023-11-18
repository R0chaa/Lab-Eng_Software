const database = require('../models');

class LocalidadesController{
    static async selectAllLocalidades(req,res){
        try{
            const Localidades = await database.Localidades.findAll();
            return res.status(200).json(Localidades);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    };
    static async selectLocalidade(req,res){
        const { id } = req.params;
        try{
            const Localidade = await database.Localidades.findAll( {
                 where  : {
                     id_condominio: Number(id) 
                    }
                });
            return res.status(200).json(Localidade);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async insertLocalidade(req,res){
        const Localidade = req.body;
        try{
            const LocalidadeCriada = await database.Localidades.create(Localidade);
            return res.status(200).json(LocalidadeCriada);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateLocalidade(req,res){
        const { id } = req.params;
        const newData = req.body;
        try{
            await database.Localidades.update(newData, {
                where:{
                    id: Number(id)
                }
            });
            const LocalidadeAtt = await database.Localidades.findOne( {
                where  : {
                    id: Number(id) 
                   }
               });
            return res.status(200).json(LocalidadeAtt);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteLocalidade(req,res){
        const { id } = req.params;
        try{
            await database.Localidades.destroy({
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

module.exports = LocalidadesController;