const { Router } = require('express');
const LocalidadesController = require('../controllers/LocalidadesController');

const router = Router();

router.get('/localidades', LocalidadesController.selectAllLocalidades);
router.get('/localidades/:id', LocalidadesController.selectLocalidade);
router.post('/localidades', LocalidadesController.insertLocalidade);
router.put('/localidades/:id', LocalidadesController.updateLocalidade);
router.delete('/localidades/:id', LocalidadesController.deleteLocalidade);

module.exports = router;