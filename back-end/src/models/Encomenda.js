import  {DataTypes , Sequelize } from 'sequelize';
import Morador from "./Morador.js";
import Funcionario from "./Funcionario.js";

const Encomenda = Sequelize.define('Encomendas',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    data_recebimento:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    id_morador:{
        tableName: Morador,
    },
    id_funcionario:{
        tableName: Funcionario,
    },
    descricao:{
        type: DataTypes.STRING,
    },
});

const encomenda = Sequelize.model("Encomendas", Encomenda);
export default encomenda;