//importando o express
const express= require('express')

//app
const app=express();

//especificando local das imagens e dos estilos
app.use(express.static(__dirname + "/public"));


app.get('/', function(req,res){
    res.sendFile(__dirname + "/index.html");
});

//servidor
app.listen(3030);