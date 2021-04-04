const tf = require('@tensorflow/tfjs');
//require('@tensorflow/tfjs-node');
const path = require('path')

async function createModel(){
    modPath = path.join(path.join(__dirname, 'mnist'), 'model.json')
    console.log(modPath)
    const model = await tf.loadModel('file://' + 'mnist/model.json')
    console.log("model made")
    //    const model = tf.Sequential()
//    model.add(tf.layers.conv2d())
}

createModel().then(() => {
    console.log('done')
})