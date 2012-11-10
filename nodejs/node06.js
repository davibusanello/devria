var http = require('http'),
  fileSystem = require('fs'),
  path = require('path'),
  util = require('util');

http.createServer(function(request, response){
  var filePath = path.join(__dirname, 'Deep Kick.mp3');
  var stat = fileSystem.statSync(filePath);

  response.writeHead(200, {
    'Content-Type': 'audio/mpeg',
    'content-Length': stat.size
  });

  var readStream = fileSystem.createReadStream(filePath);

  readStream.on('data', function(data){
    response.write(data);
  });
  readStream.on('end', function(){
    response.end();
  });

  //Otimizada Simples
  util.pump(readStream, response);

})
.listen(8888);
console.log('Subiu o server na porta 8888');