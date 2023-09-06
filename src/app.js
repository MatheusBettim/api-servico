const express = require('express')
const app = express()
app.use(express.json())
const mongoose = require('mongoose') 

mongoose.connect('mongodb+srv://internal-service:egEaT07mdW4Hbdza@cluster0.gaxqkxk.mongodb.net/internal-service-db?retryWrites=true&w=majority')

app.use(express.urlencoded({
    extended: true
}))

require('./models/departamento')
require('./models/pessoa')

const departamentoRouter = require('./routers/departamento-router')
const pessoaRouter = require('./routers/pessoa-router')
const index = require('./routers/index')

app.use('/', index)
app.use('/departamento', departamentoRouter)
app.use('/pessoa', pessoaRouter)
module.exports = app;