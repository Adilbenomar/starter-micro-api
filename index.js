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
        })
}
/////////////////////////////////////////////////////////////////////////////////
 function readdata(){
     let data =  s3.getObject({
            Bucket: "cyclic-muddy-foal-fatigues-eu-north-1",
            Key: "data/data.json",
        })

     return JSON.parse(data);
 }
/////////////////////////////////////////////////////////////////////////////////
app.get('/', function (req, res) {
    let msg="Welcome  to API  cyclic server"
  res.send(msg)
})
app.get('/student', function (req, res) {
 let data= readdata()
    let msg="Welcome  to API  cyclic server"
  res.send(data)
})

app.post('/addstudent', function (req, res) {
 let student= req.body
 writedata(student)
    let msg="Student added succesfully"
  res.send(msg)
})

app.listen(port,function(){
    
})
