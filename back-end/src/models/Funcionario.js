import  {DataTypes , sequelize } from 'sequelize';
import Condominio from "./Condominio.js";

const Funcionario = sequelize.define('Funcionario',{
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
    CPF:{
        type: DataTypes.CHAR(11),
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

const funcionario = sequelize.model("Funcionario", Funcionario);
export default funcionario;