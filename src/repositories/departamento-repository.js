const res = require('express/lib/response');
const mongoose = require('mongoose')
const Departamento = mongoose.model('Departamento')

exports.getAll = async()=>{
    const result = await Departamento.find({ativo:true});
    return result;
}

exports.create = async(data) => {
    let Departamento = Departamento(data);
    await Departamento.save();
}

exports.delete = async(id) => {
    await Departamento.findByIdAndUpdate(id, {
        $set:
        {
            ativo:false
        }
    })
}

exports.getById = async(id) => {
    const result = await Departamento.findOne({_id: id},
        "_id nome setor"
    );

    return result;
}

exports.update = async(id, data) =>{
    await Departamento.findByIdAndUpdate(id,
        {
            $set:{
                nome: data.nome,
                setor: data.setor,
            }
        })
}