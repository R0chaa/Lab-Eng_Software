const { Router } = require('express');
const ForumsController = require('../controllers/ForumsController');

const router = Router();

router.get('/forums', ForumsController.selectAllForums);
router.get('/forums/:id', ForumsController.selectForum);
router.post('/forums', ForumsController.insertForum);
router.put('/forums/:id', ForumsController.updateForum);
router.delete('/forums/:id', ForumsController.deleteForum);

module.exports = router;