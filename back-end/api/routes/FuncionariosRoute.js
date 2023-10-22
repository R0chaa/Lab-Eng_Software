const { Router } = require('express');
const FuncionariosController = require('../controllers/FuncionariosController');

const router = Router();

router.get('/funcionarios', FuncionariosController.selectAllFuncionarios);
router.get('/funcionarios/:id', FuncionariosController.selectFuncionario);
router.post('/funcionarios', FuncionariosController.insertFuncionario);
router.put('/funcionarios/:id', FuncionariosController.updateFuncionario);
router.delete('/funcionarios/:id', FuncionariosController.deleteFuncionario);

module.exports = router;