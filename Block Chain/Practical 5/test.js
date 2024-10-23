const readline = require('readline');
const { Blockchain, Block } = require('./blockchain.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let myBlock = new Blockchain();
const promptUser = () => {
    rl.question('Enter transaction type (D for Deposit, W for Withdrawal, E toExit): ', (choice) => {
        if (choice === 'E') {
            console.log('Exiting...');
            rl.close();
            return;
        }
        rl.question('Enter amount: ', (amount) => {
            amount = parseFloat(amount);
            if (choice === 'D') {
                myBlock.addBlock(new Block(myBlock.chain.length, new Date(), 'D',
                    amount));
            } else if (choice === 'W') {
                myBlock.addBlock(new Block(myBlock.chain.length, new Date(), 'W',
                    amount));
            } else {
                console.log('Invalid transaction type. Please enter D, W, or E.');
            }
            console.log(JSON.stringify(myBlock, null, 2));
            console.log(myBlock.validate());
            promptUser(); // Prompt again for the next transaction
        });
    });
};
console.log('Developed by:\nName: Shailesh Tagadghar\nSeat:31031523034');
promptUser();
