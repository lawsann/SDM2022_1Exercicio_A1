const express = require("express")

let app = express()

app.get('/', function(req,res) {
    return res.send("recebi requisição GET")
})

app.post('/', function(req,res) {
    return res.send("recebi requisição POST")
})

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000 ...");
})