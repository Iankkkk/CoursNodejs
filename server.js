const express = require('express');
const bodyParser = require('body-parser');

var port = process.env.PORT || 3000

let app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("Hello World");
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