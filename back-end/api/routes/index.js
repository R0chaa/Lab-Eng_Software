const bodyParser = require('body-parser');
const condominios = require('./CondominiosRoute');
const moradores = require('./MoradoresRoute');
const funcionarios = require('./FuncionariosRoute');
const localidades = require('./LocalidadesRoute');
const encomendas = require('./EncomendasRoute');
const reservas = require('./ReservasRoute');
const forums = require('./ForumsRoute');

module.exports = app => {
    app.use(bodyParser.json());
    app.use(condominios);
    app.use(moradores);
    app.use(funcionarios);
    app.use(localidades);
    app.use(encomendas);
    app.use(reservas);
    app.use(forums);
};