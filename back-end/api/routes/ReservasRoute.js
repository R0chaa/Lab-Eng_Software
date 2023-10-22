const { Router } = require('express');
const ReservaController = require('../controllers/ReservasController');

const router = Router();

router.get('/reserva', ReservaController.selectAllReservas);
router.get('/reserva/:id', ReservaController.selectReserva);
router.post('/reserva', ReservaController.insertReserva);
router.put('/reserva/:id', ReservaController.updateReserva);
router.delete('/reserva/:id', ReservaController.deleteReserva);

module.exports = router;