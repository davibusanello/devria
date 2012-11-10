var fs = require('fs');

fs.appendToFile = function(path, data, callback) {
  fs.open(path, 'a', 0666, function(err,fd) {
    if (err) return callback(err);
    fs.write(fd, data, null, null, function(err, written, buffer)
    {
      if (err) return callback(err);
      fs.close(fd, function(err) {
        return callback(err);
      });
    });
  });
};
//O Node não tem isso, sendo assim criamos o nosso
fs.appendToFile(__dirname + '/message.txt', '\rDados adicionas',
  function(err) {
    console.log("Terminou a funcao");
    console.log(err);
});