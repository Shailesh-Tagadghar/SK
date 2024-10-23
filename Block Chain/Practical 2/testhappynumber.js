console.log("Name: Shailesh Tagadghar, Roll No: 31031523034");
const {Blockchain,Block} = require('./happynumber');
let myBlock = new Blockchain();
myBlock.addBlock(new Block(1,'07/08/2024',19));
myBlock.addBlock(new Block(1,'07/08/2024',5));
console.log(JSON.stringify(myBlock,null,2));

//to run this code -- node testhappynumber.js
