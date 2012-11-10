var fs = require('fs');

//Lista o diretório corrente
fs.readdir('.', function(err, arquivos){
  console.log(arquivos);
});

//Lista diretório de acordo com o path passado
function listaDir(path) {
  fs.readdir(path, function(err, arquivos){
    arquivos = arquivos.filter(function(arquivo){
      return arquivo != 'upload';
    });
    listaArquivos(path, arquivos);
  });
}

//Listando arquivos de um diretorio
function listaArquivos(path, arquivos) {
  if(!arquivos) return;
  arquivos.forEach(function(arquivo){
    var pathArquivo = path + '/' + arquivo;
    console.log(pathArquivo, function(err, stats){
      if (stats.isDirectory()){
        listaDir(pathArquivo);
      }
    });
  });
}