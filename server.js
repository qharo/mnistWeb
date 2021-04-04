const express = require("express");
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/model', (req, res) => {
    //let modPath = path.join(path.join(__dirname, 'mnist'), 'model.json')
    let rawdata = fs.readFileSync('mnist_tfjs/model.json')
    let mod = JSON.parse(rawdata)
    res.json(rawdata)
    console.log("done")
})

statPath = path.join(__dirname, 'static')
app.use(express.static(statPath))

app.listen(port, ()=> {
    console.log("Listening")
})

