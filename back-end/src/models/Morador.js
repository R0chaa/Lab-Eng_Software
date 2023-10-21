import  {DataTypes , sequelize } from 'sequelize';
import Condominio from "./Condominio.js";

const Morador = sequelize.define('Morador',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    senha:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    nome_completo:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    residencia:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone:{
        type: DataTypes.CHAR(14),
        allowNull: false,
    },
    id_condominio:{
        tableName: Condominio,
    },
});

const morador = sequelize.model("Morador",Morador);
export default morador;