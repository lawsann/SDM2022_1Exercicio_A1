const express = require("express")

let app = express()

app.get('/', function(req,res) {
    return returnSuccessMessage(req, res)
})

app.get('/produtos', function(req,res) {
    return returnSuccessMessage(req, res)
})

app.get('/filmes/:id?', function(req,res) {
    if (!req.params.id) {
        return returnErrorMessage(req, res)
    }

    return returnSuccessMessage(req, res)
})

app.post('/musica/:id?/:autor?/:genero?', function(req,res) {
    if (!req.params.id || !req.params.autor || !req.params.genero) {
        return returnErrorMessage(req, res)
    }

    return res.json({
        id     : req.params.id,
        autor  : req.params.autor,
        genero : req.params.genero
    })
})

app.post('/', function(req,res) {
    return returnSuccessMessage(req, res)
})

app.listen(3000, function() {
    console.log("Servidor rodando na porta 3000 ...");
})

/**
 * Retorna codigo 400 para o status da requisicao HTTP e escreve a
 * mensagem de parametros invalidos
 * @param IncomingMessage req 
 * @param ServerResponse res 
 * @returns ServerResponse
 */
function returnErrorMessage(req, res)
{
    res.status(400)
    return res.send('parametros inválidos')
}

/**
 * Retorna codigo 200 para o status da requisicao HTTP e escreve a
 * mensagem com a rota acessada
 * @param IncomingMessage req 
 * @param ServerResponse res 
 * @returns ServerResponse
 */
function returnSuccessMessage(req, res)
{
    res.status(200)
    return res.send('ROTA ' + req.originalUrl + ' foi acessada')
}
