// Create a blockchain to deposit and withdraw money.

const c = require('crypto');
class Block {
    constructor(index, timeStamp, choice, amount, balance = 0, previousHash = '') {
        this.i = index;
        this.t = timeStamp;
        this.choice = choice;
        this.amount = amount
        this.balance = amount;
        this.previousHash = previousHash;
        this.hash = this.calHash();
    }
    deposit(amount) {
        this.balance = this.balance + amount;
    }
    withdraw(amount) {
        if (this.balance > amount)
            this.balance = this.balance - amount;
    }
    //Creates a block
    calHash() {
        return
        c.createHash('sha256').update(this.i + this.t + this.choice + this.balance + this.previousHash).digest('hex');
    }
}
class Blockchain {
    //Initializes the chain with the genesis block
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }
    createGenesisBlock() {
        return new Block(0, new Date(), 'D', 1000, 0, '0');
    }
    //Gets the new block that was added to the end of the chain
    getCurrentBlock() {
        return this.chain[this.chain.length - 1];
    }
    //Adds a new block to the chain
    addBlock(newBlock) {
        newBlock.previousHash = this.getCurrentBlock().hash;
        if (newBlock.choice == 'D') {
            newBlock.balance = this.getCurrentBlock().balance + newBlock.amount;
        }
        else if (newBlock.choice == 'W') {
            if (this.getCurrentBlock().balance >= newBlock.amount)
                newBlock.balance = this.getCurrentBlock().balance -
                    newBlock.amount;
            else {
                newBlock.balance = this.getCurrentBlock().balance;
            }
        }
        else {
            console.log("Enter valid choice.");
        }
        newBlock.hash = newBlock.calHash();
        this.chain.push(newBlock);
    }
    validate() {
        for (let i = 1; i < this.chain.length; i++) {
            let cb = this.chain[i];
            let pb = this.chain[i - 1];
            if (cb.h != cb.calHash()) {
                return false;
            }
            if (pb.h != cb.ph) {
                return false;
            }
        }
        return true;
    }
}
module.exports.Block = Block;
module.exports.Blockchain = Blockchain;
