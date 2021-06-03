const router = require("express").Router();
const api = require('./api');
const htmlRoutes = require('./htmlRoutes');

router.use('/api', api);
router.use('/', htmlRoutes);

module.exports = router;