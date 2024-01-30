const express = require('express');
const app = express();
const port = 3000;

const AWS = require("aws-sdk");
const s3 = new AWS.S3()
///////////////////////////////////////////////////////////////////////////////
function writedata(data){
 s3.putObject({
            Body: JSON.stringify(data),
            Bucket: "cyclic-muddy-foal-fatigues-eu-north-1",
            Key: "data/data.json",
        }).promise()
}
/////////////////////////////////////////////////////////////////////////////////
 function readdata(){
     let data = await s3.getObject({
            Bucket: "cyclic-muddy-foal-fatigues-eu-north-1",
            Key: "data/data.json",
        }).promise()

     return JSON.parse(data);
 }
/////////////////////////////////////////////////////////////////////////////////
app.get('/', function (req, res) {
    let msg="Welcome  to API  cyclic server"
  res.send(msg)
})

app.listen(port,function(){
    
})
