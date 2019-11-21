const express = require('express');
const router = express.Router();

const menuController = require('../controllers/menuController.js');

router.get('/get-adopts', menuController.showAdoptions);
router.post('/get-detail-adopt', menuController.detailAdopt);


module.exports = router;
