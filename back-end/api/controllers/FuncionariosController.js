const database = require('../models');

class FuncionariosController{
    static async selectAllFuncionarios(req,res){
        try{
            const Funcionarios = await database.Funcionarios.findAll();
            return res.status(200).json(Funcionarios);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    };
    static async selectFuncionario(req,res){
        const { id } = req.params;
        try{
            const Funcionario = await database.Funcionarios.findOne( {
                 where  : {
                     id: Number(id) 
                    }
                });
            return res.status(200).json(Funcionario);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async insertFuncionario(req,res){
        const Funcionario = req.body;
        try{
            const FuncionarioCriado = await database.Funcionarios.create(Funcionario);
            return res.status(200).json(FuncionarioCriado);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateFuncionario(req,res){
        const { id } = req.params;
        const newData = req.body;
        try{
            await database.Funcionarios.update(newData, {
                where:{
                    id: Number(id)
                }
            });
            const FuncionarioAtt = await database.Funcionarios.findOne( {
                where  : {
                    id: Number(id) 
                   }
               });
            return res.status(200).json(FuncionarioAtt);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteFuncionario(req,res){
        const { id } = req.params;
        try{
            await database.Funcionarios.destroy({
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

module.exports = FuncionariosController;