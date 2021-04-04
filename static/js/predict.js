//import * as tf from '@tensorflow/tfjs'

predictB = document.getElementById("predict")
resetB = document.getElementById("reset")

function getId(x, y){
    x = x.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    y = y.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    return String(x)+String(y)
}


function predict(){
    let blocks = []
    for(i = 0; i < 28; i++){
        for(j = 0; j < 28; j++){
            let block = document.getElementById(getId(i, j))
            if(block.style.backgroundColor == 'white')
                blocks.push("0")
            else
                blocks.push("1")
        }
    }
    tflow(blocks).then((p) => {
        let result = document.getElementById('prediction')
        result.innerHTML = p
    })
}

async function tflow(blocks){
    let data = blocks.join()
    console.log(data)
    let test = {
        'hello':'testing'
    }
    // const response = await fetch('/' + data, {
    //     method: 'POST',
    //     body: test,
    //     headers: {"Content-type": "application/json; charset=UTF-8"}
    // })
    const response = await fetch('/predict/' + data, {
        method: 'POST'
    })
    const value = await response.json()
    return value
}

function reset(){
    for(i = 0; i < 28; i++){
        for(j = 0; j < 28; j++){
            let block = document.getElementById(getId(i, j))
            block.style.backgroundColor = 'white'
        }
    }
}

predictB.onclick = predict
resetB.onclick = reset
