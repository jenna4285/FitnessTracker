const express = require('express');
const router = express.Router();

const apiRoutes = require('./api_routes');
const htmlRoutes = require('./html_routes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;