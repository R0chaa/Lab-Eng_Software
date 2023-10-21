import  {DataTypes , Sequelize } from 'sequelize';
import Localidade from "./Localidade.js";
import Morador from "./Morador.js";

const Reserva = sequelize.define('Reservas',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    dia:{
        type: DataTypes.DATEONLY,
    },
    horario:{
        type: DataTypes.TIME,
    },
    id_localidade:{
        tableName: Localidade,
    },
    id_morador:{
        tableName: Morador,
    }
});

const reserva = sequelize.model("Reservas", Reserva);
export default reserva;