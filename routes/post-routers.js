const express = require('express');
const router = express.Router();
const PostagemController = require('../controllers/postagens');
const PostagemModel = require('../models/postagem');

const postagemController = new PostagemController(PostagemModel);

router.get('/', function(req, res){
    // busca postagem no banco de dados
    res.send(postagens);
});


router.get('/:id', async function(req, res){
    const id = req.params.id;
    const postagens = await postagemController.consultarPorId(id);   
    res.send(postagens);
});

router.post('/', function(req, res){
    // salva postagens no banco de dados
    res.send('postagem Salva!');
});

router.put('/:id', async function(req, res){
    const id = req.params.id;
    const postagemDTO = req.body;
    await postagemController.alteraPorID(id, postagemDTO);
    res.send('Alterado com Sucesso!');
});

router.delete('/:id', async function(req, res){
    const id = req.params.id;
    await postagemController.deletarPorId(id);
    res.send('Removido!');
})

// delete por id

module.exports = router;







