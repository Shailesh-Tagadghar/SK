//additon of two number
const { Block, Blockchain } = require('./blockchain');
let mb = new Blockchain();
console.log("Shailesh Tagadghar")
console.log("31031523034")
console.log("First transaction");
mb.addBlock(new Block(1, '01/08/2024', 23, 5));
mb.addBlock(new Block(2, '01/08/2024', 2, 15));
console.log(JSON.stringify(mb, null, 3));



// // to run this code  -- node test.js 
// // if required any module to install -- npm install ejs , npm install crypto-js

//Factorial
const { b, bc, Blockchain, Block } = require('./factorial')
let mb = new Blockchain();
console.log("Developed by Shailesh Tagadghar - 31031523034")
mb.addBlock(new Block(1, '01/08/2024', 5))
mb.addBlock(new Block(2, '01/08/2024', 12))
console.log(JSON.stringify(mb, null, 3));
