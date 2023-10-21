import  {DataTypes} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
    const Condominio = sequelize.define('Condominio',{
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        CNPJ:{
            type: DataTypes.CHAR(14),
        },
        nome:{
            type: DataTypes.STRING,
        },
    },{});
    return Condominio;
};
