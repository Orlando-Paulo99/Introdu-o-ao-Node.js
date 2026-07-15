//importanto o modulo http

let http= require('http')


http.createServer(function(req, res){
    res.write('Aprendendo Node JS');
    res.end();

}).listen(3030);