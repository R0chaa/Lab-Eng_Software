const express  = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000' // Defina a origem que você deseja permitir
}));

const port = 4000;

routes(app);

app.listen(port, () => console.log(`Port ${port}`));

module.exports = app;