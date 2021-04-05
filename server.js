const express = require("express");
const path = require('path')
const bodyParser = require('body-parser')
const fs = require('fs')
const tens = require('./tenso')

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
    let T = new tens.tens(deco(req.params.data))
    T.predict().then((val) => {
        res.send(String(val))
    })
})

app.get('/model', (req, res) => {
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

