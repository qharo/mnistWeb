const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node');
const path = require('path')

class tens{
    constructor(blocks){
        this.blocks = blocks
    }

    async predict(){
        this.model = await tf.loadLayersModel('file://mnist_tfjs/model.json')
        let inp = tf.tensor2d(this.blocks, [28,28])
        inp = inp.reshape([1, 28, 28, 1])
        let output = this.model.predict(inp).dataSync()
        let maxV = output.reduce(function(a, b) {
            return Math.max(a, b);
        });
        return output.indexOf(maxV)
    }
}

module.exports = {tens}
