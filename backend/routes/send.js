const { Router } = require('express');
const router = Router();
const {send} = require('../controllers/send');

router.post('/', send);

module.exports = router;