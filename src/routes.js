const express = require('express');

const routes = express.Router(); // desacoplando o módulo de rotas do express em uma variável

/**
 * Query Params: 
 *      Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 *      const params = request.query;
 * 
 * Route Params: 
 *      Parâmetros utilizados para identificar recursos, "/:id"
 *      const params = request.params
 * 
 * Request Body: 
 *      Corpo da requisição, utilizado para criação ou alteração de recursos "{ "id": 1 }"
 *      const body = request.body
 *      
 */

routes.get('/', (request, response) => {
    
    response.json({
        mensagem: "Hello world"
    });

});

routes.post('/ongs', (request, response) => {

    const body = request.body;

    console.log("Body: ", body);

    return response.json({
        evento: 'Home Office',
        empregado: 'Gabriel de Oliveira Rigo'
    });


});


module.exports = routes; 