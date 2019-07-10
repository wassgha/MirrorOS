const express = require('express');
const router = express.Router();

router.use('/device', require('./device'));
router.use('/user', require('./user'));
router.use('/widgets', require('./widgets'));

module.exports = router;
