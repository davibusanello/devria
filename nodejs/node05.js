/**
var stream = require('stream');
console.log(process.stdin instanceof stream.Stream);
console.log(process.stdout instanceof stream.Stream);
**/

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function(chunk){
  console.log('Dados de entrada ' + chunk);
});
