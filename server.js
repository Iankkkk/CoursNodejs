const express = require('express');

var port = process.env.port || 8080

let app = express();

app.get('/', (req, res) => 
{
    res.write("Hello World");
    res.end();
}
)

app.listen(8080);