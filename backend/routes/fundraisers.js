const express = require('express');
const router = express.Router();
const fundraiserController = require('../controllers/fundraiserController');

// Get all active fundraisers
router.get('/active', fundraiserController.getAllActiveFundraisers);

// Get all categories
router.get('/categories', fundraiserController.getAllCategories);

// Get active fundraisers by criteria
router.get('/search', fundraiserController.getFundraisersByCriteria);

// Get fundraiser details by ID
router.get('/:id', fundraiserController.getFundraiserById);

module.exports = router;
