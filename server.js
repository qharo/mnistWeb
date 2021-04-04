const express = require("express");
const path = require('path')
const bodyParser = require('body-parser')

const app = express();
const port = process.env.port || 3000;

const urlEncPar = bodyParser.urlencoded({extended: false})

function deco(fullS){
    let blocks = []
    let g = fullS.split(',').map(Number)
    while(g.length) blocks.push(g.splice(0,28));
    return blocks
}

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "html/mnist.html"))
})

app.post("/predict/:data", urlEncPar, (req, res) => {
    const tfInput = deco(req.params.data)
    res.send("4")
})

statPath = path.join(__dirname, 'static')
app.use(express.static(statPath))

app.listen(port, ()=> {
    console.log("Listening")
})

