console.log("Name: Shailesh Tagadghar, Roll No: 31031523034");
const {Blockchain,Block} = require('./factorial');
let myBlock = new Blockchain();
console.log("First Transaction.");
myBlock.addBlock(new Block(1,'01/08/2024',5));
console.log(JSON.stringify(myBlock,null,2));


// to run this code -- node test.js
