var mysql = require('mysql');

var client = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12xd25hd',
  database: 'aluno'
});

client.query('SELECT * from aluno ', function(err, results, fields){
  results.forEach(function(request){
    console.log('id:' + result.id + ' nome:' + result.NmAluno + 'E-mail: ' + result.DsEmail);
  });
  client.end();

});
client.query('DELETE FROM aluno WHERE id = ?', ['3'], function(err, info){
  console.log("registro foi deletado");
});
client.query('INSERT INTO aluno (NmAluno, DsEmail) VALUES(?, ?)', ['Davi', 'davibusanello@gmail.com'],
  function(err, info){
    console.log(err);
    console.dir(info);
    console.log(info.insertId);
  }
);
