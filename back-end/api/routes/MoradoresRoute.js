const { Router } = require('express');
const MoradoresController = require('../controllers/MoradoresController');

const router = Router();

router.get('/moradores', MoradoresController.selectAllMoradores);
router.get('/moradores/login/:email/:password', MoradoresController.selectMorador);
router.post('/moradores', MoradoresController.insertMorador);
router.put('/moradores/:id', MoradoresController.updateMorador);
router.delete('/moradores/:id', MoradoresController.deleteMorador);

module.exports = router;