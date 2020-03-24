const express = require('express') //importa um módulo para uma variável, em node

const app = express(); //variável que armazena toda a aplicação

app.get('/', (request, response) => {
    
    response.json({
        mensagem: "Hello world"
    });

})

app.listen(3333); //fazendo a aplicação escutar a porta 3333