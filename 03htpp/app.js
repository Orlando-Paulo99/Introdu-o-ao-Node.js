//importanto o modulo http

let http= require('http')


http.createServer(function(req, res){
    res.write('Node JS é muito bom');
    res.end();

}).listen(3030);