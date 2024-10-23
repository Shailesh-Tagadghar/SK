// create a simple block chain to store only automorphic number also secure your automorphic number by DS algorithm and also validate the block before adding it into the blockchain

const c = require('crypto');
const { DES } = require('crypto-js');
class Block {
    constructor(i, t, n, ph = '') {
        this.i = i;
        this.t = t;
        this.n = n;
        this.automorphic = this.calAutoNumber();
        this.ph = ph;
        this.h = this.calHash();
    }
    calAutoNumber() {
        let n = this.n;
        let squared = n * n;
        let numStr = n.toString();
        let squaredStr = squared.toString();
        let result = squaredStr.endsWith(numStr);
        if (result == true) {
            this.automorphic = "Automorphic";
        }
        else {
            this.automorphic = "Not Automorphic";
        }
        return this.automorphic
    }
    calHash() {
        const key = c.randomBytes(32);
        const iv = c.randomBytes(16);
        let cp = c.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
        let encrypted = cp.update(this.n.toString());
        this.n = Buffer.concat([encrypted, cp.final()]);
        console.log(this.n);
        return c.createHash('sha256').update(this.i + this.t + this.kaprekar +
            this.ph).digest('hex');
    }
}
class Blockchain {
    constructor() {
        this.chain = [this.createGBlock()];
    }
    createGBlock() {
        return new Block(0, new Date(), 0, '0');
    }
    getCBlock() {
        return this.chain[this.chain.length - 1];
    }
    validate() {
        for (let i = 1; i < this.chain.length; i++) {
            let cb = this.chain[i]
            let pb = this.chain[i - 1]
            if (cb.h != cb.calHash()) {
                return false;
            }
            if (pb.h != cb.ph) {
                return false;
            }
        }
        return true;
    }
    addBlock(nb) {
        if (nb.calAutoNumber() == "Automorphic") {
            nb.ph = this.getCBlock().h;
            nb.h = nb.calHash();
            this.chain.push(nb);
        }
    }
}
module.exports.Block = Block;
module.exports.Blockchain = Blockchain;
