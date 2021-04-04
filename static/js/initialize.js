let mdown = false

function getId(x, y){
    x = x.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    y = y.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    return String(x)+String(y)
}

function loadPad(){
    inputPad = document.getElementById("inputPad")

    for(i = 0; i < 28; i++){
        for(j = 0; j < 28; j++){
            let block = document.createElement('button')
            block.id = getId(i, j)
            block.style.backgroundColor = 'white'
            block.addEventListener('mousedown', () => {
                mdown = true
                block.style.backgroundColor = 'black'
            })
            block.addEventListener('mousemove', () => {
                if(mdown){
                    block.style.backgroundColor = 'black'
                }
            })
            block.addEventListener('mouseup', () => {
                mdown = false
            })
            inputPad.append(block)
        }
    }
}
