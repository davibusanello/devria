var stream = require('stream');

var streamSaida = new stream.Stream();
streamSaida.writable = true;
streamSaida.write = function(chunk, encoding){
  //this.emit('data', chunk);
  this.emit('data', new Buffer(chunk, encoding));
};

streamSaida.on('data', function(chunk){
  console.log('Dados recebidos: ' + chunk);
});

streamSaida.write('Estou escrevendo no stream');
streamSaida.write('Estou escrevendo no stream novamente');