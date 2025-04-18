/**
 * Number Routes
 * Defines the routes for the numbers API
 */
const express = require('express');
const router = express.Router();
const numberController = require('../controllers/numberController');

// GET /numbers/:numberid
router.get('/:numberid', numberController.getNumbers);

module.exports = router;
