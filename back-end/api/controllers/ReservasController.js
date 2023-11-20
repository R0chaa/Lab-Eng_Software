const database = require('../models');

class ReservasController{
    static async selectAllReservas(req,res){
        try{
            const Reservas = await database.Reservas.findAll();
            return res.status(200).json(Reservas);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    };
    static async selectReserva(req,res){
        const { id } = req.params;
        try{
            const Reserva = await database.Reservas.findOne( {
                 where  : {
                     id: Number(id) 
                    }
                });
            return res.status(200).json(Reserva);
        }
         catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async insertReserva(req,res){
        const Reserva = req.body;
        try{
            const existeReserva = await database.Reservas.findOne({
                where: {
                    id_localidade:Reserva.id_localidade,
                    dia: Reserva.dia,
                    horario: Reserva.horario,
                }
            })
            if (existeReserva){
                return res.status(400).json({error: 'Localidade já reservada neste horario'});
            }
            const ReservaCriada = await database.Reservas.create(Reserva);
            return res.status(200).json(ReservaCriada);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async updateReserva(req,res){
        const { id } = req.params;
        const newData = req.body;
        try{
            await database.Reservas.update(newData, {
                where:{
                    id: Number(id)
                }
            });
            const ReservaAtt = await database.Reservas.findOne( {
                where  : {
                    id: Number(id) 
                   }
               });
            return res.status(200).json(ReservaAtt);
        }
        catch(error){
            return res.status(500).json(error.message);
        }
    }

    static async deleteReserva(req,res){
        const { id } = req.params;
        try{
            await database.Reservas.destroy({
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

module.exports = ReservasController;