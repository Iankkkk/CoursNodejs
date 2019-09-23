const express = require('express');

var port = process.env.port || 3000

let app = express();

app.get('/', (req, res) => 
{
    res.write("Hello World");
    res.end();
}
)

app.listen(3000);