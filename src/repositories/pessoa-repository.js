const res = require('express/lib/response');
const mongoose = require('mongoose')
const Pessoa = mongoose.model('Pessoa')

exports.getAll = async()=>{
    const result = await Pessoa.find({ativo:true});
    return result;
}

exports.create = async(data) => {
    let Pessoa = Pessoa(data);
    await Pessoa.save();
}

exports.delete = async(id) => {
    await Pessoa.findByIdAndUpdate(id, {
        $set:
        {
            ativo:false
        }
    })
}

exports.getById = async(id) => {
    const result = await Pessoa.findOne({_id: id},
        "_id nome setor"
    );

    return result;
}

exports.update = async(id, data) =>{
    await Pessoa.findByIdAndUpdate(id,
        {
            $set:{
                nome: data.nome,
                documento: data.documento,
                endereco: data.endereco,
            }
        })
}