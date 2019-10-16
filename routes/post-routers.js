const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    // busca postagem no banco de dados
    res.send('lista de postagem');
});

router.post('/', function(req, res){
    // salva postagens no banco de dados
    res.send('postagem Salva!');
});

module.exports = router;