// const math = require('./math')
// console.log(math.square(7));
// console.log(math.add(2, 3));
const figlet = require('figlet')
const color = require('colors')
figlet('Hello World', function (err, data) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data.red);
})