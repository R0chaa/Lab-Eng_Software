import  {DataTypes , sequelize } from 'sequelize';
import Condominio from "./Condominio.js";

const Localidade = sequelize.define('Localidades',{
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    area:{
        type: DataTypes.STRING,
    },
    id_condominio:{
        tableName: Condominio,
    },
});

const localidade = sequelize.model("Localidades", Localidade);
export default localidade;