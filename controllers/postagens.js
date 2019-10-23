
class Postagens{
    constructor(postagemModel){
        this.Postagem = postagemModel;
    }
    async adicionar (postagemDT0){
        const postagem = new this.Postagem(postagemDT0)
        await postagem.save();
        return 'Adicionado com sucesso';
    }

    async consultarTodos(){
        const postagem = await this.Postagem.find({});
        return postagem;
    }

    async alterarPorId(id, postagemDTO){
        await this.Postagem.updateOne({_id: id}, postagemDTO);
    }

    async consultarPorId(id){
        const postagem = await this.Postagem.findById(id);
        return postagem;
    }

    async deletarPorId(id){
        await this.Postagem.deletOne(id);   
    }
}

module.exports = Postagens;