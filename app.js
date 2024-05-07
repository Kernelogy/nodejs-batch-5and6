/*
var http = require('http');
var lib = require('./mylib')

lib.calc(100,200)

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(9090); //the server object listens on port 8080
*/
const express = require('express')

const app = express()

app.get("/", (req, res)=>{
  res.send("Mother Earth")
})

//express.static => express build-in middleware
//url, folder


app.get("/hello", (req, res)=>{  
  console.log(__dirname)
  // res.statusCode = 200
  // res.status(200)
  res.set("Content-Type", "application/json")
  
  // res.send("Hello World")
  // res.send("<h1>Hello World</h1>")
  let data = {
    username: "Mukilan",
    password: "pass@123"
  }  
  res.set("x-mycookie", "12345")
  res.send(data)
})

app.get("/login", (req, res)=>{
  // const username = req.query.username
  // const password = req.query.password
  const username = req.query["username"]
  const password = req.query["password"]
  console.log(username + " " + password)
  res.send("Received")
})
app.use("/static", express.static(__dirname + "/public"))
app.use(express.json())//enable the server to parse json data
app.use(express.urlencoded())//enable the server to parse form-data
app.post("/login", (req,res)=>{
  const username = req.body["username"]
  const password = req.body["password"]
  if(username === 'mukilan' && password === 'pass@123'){
    res.send("Login Success")
  }else{
    res.send("Login Failed")
  }
})

app.listen(5000, ()=>{
  console.log("Server is running on 5000")
})
