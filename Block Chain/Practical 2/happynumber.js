//to check given number is happy number or not
const c = require('crypto');

class Block {
    constructor(index, timeStamp, n, previousHash = '') {
        this.i = index;
        this.t = timeStamp;
        this.n = n;
        this.previousHash = previousHash;
        this.hash = this.calHash();
        this.HappyNumber = this.isHappyNumber(n);
    }

    calHash() {
        return c.createHash('sha256')
            .update(this.i + this.t + this.previousHash)
            .digest('hex');
    }

    isHappyNumber(n) {
        let seen = new Set();
        while (n !== 1 && !seen.has(n)) {
            seen.add(n);
            let sum = 0;
            while (n > 0) {
                let remainder = n % 10;
                n = Math.floor(n / 10);
                sum += remainder * remainder;
            }
            n = sum;
        }
        return n === 1;
    }
}

class Blockchain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, '1/08/2024', 0, '0');
    }

    getCurrentBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(newBlock) {
        if (newBlock.HappyNumber) {
            newBlock.previousHash = this.getCurrentBlock().hash;
            newBlock.hash = newBlock.calHash();
            this.chain.push(newBlock);
        } else {
            console.log(`Block with number ${newBlock.n} is not a happy number and will not be added.`);
        }
    }
}

module.exports = { Block, Blockchain };

