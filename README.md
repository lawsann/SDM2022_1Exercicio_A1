# enunciado SDM 2022_1 A1

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

O servidor deve responder as seguintes rotas (paths), métodos e parâmetros:

    a. GET 	/
    b. GET 	/produtos
    c. GET 	/filmes/{id}
    d. POST /musica/{id}/{autor}/{genero}

**Todas seguintes condições devem ser atendidas:**

- As requisições devem retornar um status code 200 e uma mensagem **`ROTA <path rota> foi acessada`**

- Checar as requisições que possuem parâmetros. Se eles não forem definidos retorne um status code 400 e a mensagem **`parametros inválidos`** 

- Para a requisição POST retorne um status code 200 e uma mensagem JSON com os dados enviados 

**`DICA: clone o repositório e faça os testes direto rodando o servidor`**
