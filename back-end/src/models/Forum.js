import  {DataTypes , Sequelize } from 'sequelize';
import Morador from "./Morador.js";

const Forum = Sequelize.define('FORUM',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    mensagem:{
        type: DataTypes.STRING, 
        allowNull: false,       
    },
    id_morador:{
        tableName: Morador,
    },
});

const forum = Sequelize.model("FORUM", Forum);
export default forum;