const express = require('express');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000

let app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello world ");
})

app.get('/hello', (req, res) => {
    console.log(req.query.nom);

    if(req.query.nom)
    {
        res.send("Bonjour, " + req.query.nom)
    }
    else{
        res.send("Quel est votre nom ? ");
    
    }
    

})


app.post('/chat', (req, res) => {
    obj = JSON.parse(JSON.stringify(req.body,null," "));

    if(obj.msg == "ville"){
        res.send("Nous sommes a Paris");
    }
    if(obj.msg == "meteo"){
        res.send("Il fait beau aujourd'hui");
    }

})

app.listen(port);