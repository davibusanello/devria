var util = require('util');
var http = require('http');

var server = http.createServer();

server.on('request', function(request, response){
  console.log('aconteceu um request');

  request.on('data', function(data){
    console.log('chegaram dados: ' + data);
  });

  request.on('end', function(){
    console.log('a requisição chegou toda.');
    response.end('acabou o request. Isto é a resposta');
  });
});

console.log('funções: ' + server.listeners('request'));

server.listen(8888);
console.log('Subiu o server na porta 8888');