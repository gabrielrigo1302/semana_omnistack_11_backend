const express = require('express'); //importa um módulo para uma variável, em node
const routes = require('./routes'); //importa as rotas do módulo routes

const app = express(); //variável que armazena toda a aplicação

app.use(express.json()); //indicando que as requisições usam formato JSON 

app.use(routes);


app.listen(3333); //fazendo a aplicação escutar a porta 3333