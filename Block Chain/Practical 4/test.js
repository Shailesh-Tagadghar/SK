const { b, bc, Blockchain, Block } = require('./autonumber')
let mb = new Blockchain();
console.log("-------------")
console.log("Developed By - Shailesh Tagadghar 31031523034")
console.log("First Transaction")
mb.addBlock(new Block(2, new Date(),5));
mb.addBlock(new Block(2, new Date(), 7));
console.log(mb.validate());
console.log(JSON.stringify(mb, null, 3));
