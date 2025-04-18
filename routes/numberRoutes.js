const express = require('express');
const router = express.Router();
const numberController = require('../controllers/numberController');

router.get('/:numberid', numberController.getNumbers);

module.exports = router;
