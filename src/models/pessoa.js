const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String
  },
  documento: {
    type: String
  },
  endereco: {
    type: String
  },
});

module.exports = mongoose.model("Pessoa", schema);