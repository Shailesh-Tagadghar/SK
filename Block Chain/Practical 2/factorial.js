//check number is factorial or not
const c = require('crypto')
class Block {
    constructor(index, timeStamp, n, previousHash = '') {
        this.i = index;
        this.t = timeStamp;
        this.n = n;
        this.previousHash = previousHash;
        this.hash = this.calHash();
        this.factorial = this.calFactorial(n);
    }
    //Creates a block
    calHash() {
        return
        c.createHash('sha256').update(this.i + this.t + this.previousHash).digest('hex');
    }
    //Calculates factorial
    calFactorial(n) {
        if (n == 0) {
            return 1;
        }
        return n * this.calFactorial(n - 1);
    }
}
class Blockchain {
    //Initializes the chain with the genesis block
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, '1/08/2024', 0, 0, '0');
    }
    //Gets the new block that was added to the end of the chain
    getCurrentBlock() {
        return this.chain[this.chain.length - 1];
    }
    //Adds a new block to the chain
    addBlock(newBlock) {
        newBlock.previousHash = this.getCurrentBlock().hash;
        newBlock.hash = newBlock.calHash();
        this.chain.push(newBlock);
    }
}
module.exports.Block = Block;
module.exports.Blockchain = Blockchain;
