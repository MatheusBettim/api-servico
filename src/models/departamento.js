const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String
  },
  setor: {
    type: String
  },
});

module.exports = mongoose.model("Departamento", schema);
