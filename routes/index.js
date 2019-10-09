const express = require(express);
const router = express.Router();

router.use('/', function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    res.send('App está online!')
});

module.exports = router;