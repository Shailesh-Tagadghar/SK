const c = require('crypto')
class Block {
    constructor(i, t, n, ph = '') {
        this.i = i;
        this.t = t;
        this.n = n;
        this.fact = this.factorial(n);
        this.ph = ph;
        this.h = this.calHash();
    }
    factorial(n) {
        let ans = 1;
        if (n === 0)
            return 1;
        for (let i = 2; i <= n; i++)
            ans = ans * i;
        return ans;
    }
    calHash() {
        return c.createHash('sha256').update(this.i + this.t + this.sum +
            this.ph).digest('hex');
    }
}
class Blockchain {
    constructor() {
        this.chain = [this.createGBlock()];
    }
    createGBlock() {
        return new Block(0, '01/08/2024', 0, 0, '0');
    }
    getCBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(nb) {
        nb.ph = this.getCBlock().h;
        nb.h = nb.calHash();
        this.chain.push(nb);
    }
}
module.exports.Block = Block;
module.exports.Blockchain = Blockchain;
