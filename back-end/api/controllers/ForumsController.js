const database = require('../models');

class ForumsController{
    static async selectAllForums(req,res){
        try{
            const Forums = await database.Forums.findAll();
            return res.status(200).json(Forums);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    };
    static async selectForum(req,res){
        const { id } = req.params;
        try{
            const Forum = await database.Forums.findOne( {
                 where  : {
                     id: Number(id) 
                    }
                });
            return res.status(200).json(Forum);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async insertForum(req,res){
        const Forum = req.body;
        try{
            const ForumCriada = await database.Forums.create(Forum);
            return res.status(200).json(ForumCriada);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateForum(req,res){
        const { id } = req.params;
        const newData = req.body;
        try{
            await database.Forums.update(newData, {
                where:{
                    id: Number(id)
                }
            });
            const ForumAtt = await database.Forums.findOne( {
                where  : {
                    id: Number(id) 
                   }
               });
            return res.status(200).json(ForumAtt);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteForum(req,res){
        const { id } = req.params;
        try{
            await database.Forums.destroy({
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

module.exports = ForumsController;