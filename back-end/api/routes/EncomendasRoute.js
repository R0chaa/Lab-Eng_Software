const { Router } = require('express');
const EncomendasController = require('../controllers/EncomendasController');

const router = Router();

router.get('/Encomendas', EncomendasController.selectAllEncomendas);
router.get('/Encomendas/:id', EncomendasController.selectEncomenda);
router.post('/Encomendas', EncomendasController.insertEncomenda);
router.put('/Encomendas/:id', EncomendasController.updateEncomenda);
router.delete('/Encomendas/:id', EncomendasController.deleteEncomenda);

module.exports = router;