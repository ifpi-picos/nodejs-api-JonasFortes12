const express = require(express);
const postRoutes = require('./post-routers')
const router = express.Router();

router.use('/', function(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.get('/', function(req, res) {
    res.send('App está online!')
});

router.use('/postagens', postRoutes);
// router.use('/users') 

module.exports = router;