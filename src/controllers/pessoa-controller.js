const repository = require("../repositories/pessoa-repository")
const ValidationContract = require('../util/validator')


exports.getAll = async(req, res, next) =>{
    const data = await repository.get();

    if(data == null)
        res.status(204).send();

    res.status(200).send(data);
};

exports.post = async(req, res, next) =>{
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.name, 4, 'O nome precisa de no mínimo 4 caracteres.')
    contract.hasMaxLen(req.body.nome, 20, 'O nome pode ter no máximo 20 caractetres')

    try {
        if(!contract.isValid())
        res.status(400).send({message : "Erro no cadastro das informações"})

    await repository.create(req.body)
    res.status(200).send("Criado com sucesso!")
    } catch(error) {
        res.status(500).send({message: "Erro ao criar usuário"})
    }
};

exports.update = async(req, res, next) => {

const id = req.params.id;

    await repository.update(id, res.body);
    res.status(200).send("Atualizado!")
};

exports.delete = async(req, res, next) => {
    const id = req.params.id;
    await repository.delete(id);
    res.status(200).send('Removido!')
}

exports.getById = async(req, res, next) => {
    const id = req.params.id;
    const data = await repository.getById(id);

    if(data == null)
        res.status(404).send()
    res.status(200).send(data);
}

