//Carregando módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
const app = express()
const admin = require("./routes/admin")
const path = require("path")

//Configurações
    // bodyParser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())

    // handlebars
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars');

    // mongoose

    // Public
    app.use(express.static(path.join(__dirname,"public")))

// Rotas
app.use('/', admin)
    

//Outros
const port = 8081
app.listen(port, () => {
    console.log("Servidor Rodando")
})