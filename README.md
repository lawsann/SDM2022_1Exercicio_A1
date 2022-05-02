# atividade SDM 2022_1 Simulado A1

Dado o arquivo server.js (exemplo neste repositório):

~~~javascript 
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
~~~


Altere-o para que ele atenda as seguintes especificações:
    a) (6 -pontos) Que o servidor responda as seguintes rotas (paths), métodos e parâmetros:
        a. GET 	/
        b. GET 	/users
        c. GET 	/users/{id}
        d. POST 	/users/{id}/{nome}/{email}
    b) (6 pontos) Que as seguintes condições sejam atendidas:
        a. Todas as requisições devem retornar um status code 200 e uma mensagem “API acessada com sucesso”
        b. Para as requisições que possuem parâmetros, caso os parâmetros não estejam presentes, devem retornar um status code 400 e a mensagem “Requisição não reconhecida”
        c. Para a requisição com todos os parâmetros presentes “POST /users/{id}/{nome}/{email}” deve-se retornar um status code 200 e uma mensagem em formato JSON com os dados enviados (id, nome e-mail}