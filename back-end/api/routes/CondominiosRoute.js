const { Router } = require('express');
const CondominiosController = require('../controllers/CondominiosController');

const router = Router();

router.get('/condominios', CondominiosController.selectAllCondominios);
router.get('/condominios/:id', CondominiosController.selectCondominio);
router.post('/condominios', CondominiosController.insertCondominio);
router.put('/condominios/:id', CondominiosController.updateCondominio);
router.delete('/condominios/:id', CondominiosController.deleteCondominio);

module.exports = router;