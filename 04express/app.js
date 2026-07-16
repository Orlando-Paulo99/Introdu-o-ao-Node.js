//Importando o express

const express= require('express')


// variavel de funcionalidade do express
const app=express();

//funcionalidade 
app.get('/',function(req, res){
    res.write('O express é legal');
    res.end()
});

//criando a porta

app.listen(3030);