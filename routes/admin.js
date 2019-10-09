const express = require("express")
const router  = express.Router()

router.get('/', (req, res) => {
    res.render("admin/home")
})

router.get('/login', (req, res) => {
    res.render("admin/login")
})

router.get('/cadastroUsuario', (req, res) => {
    res.render("admin/cadastroUsuario")
})

router.get('/cadastroParceiro', (req, res) => {
    res.render("admin/cadastroParceiro")
})

router.get('/produtos', (req, res) => {
    res.render("admin/produtosCadastro")
})

router.get('/homeUsuario', (req, res) => {
    res.render("admin/homeUsuario")
})

module.exports = router