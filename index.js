const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json()); 


app.get('/', function (req, res) {
    let msg="Welcome to cyclic to API"
  res.send(msg)
})

app.listen(port,function(){
    
})
