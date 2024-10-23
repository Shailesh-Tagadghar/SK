// Import the Block and Blockchain classes from the kaprekar.js file
const { Block, Blockchain } = require('./kaprekar');
// Create a new blockchain instance
const blockchain = new Blockchain();
// Define an array of numbers to test
const testNumbers = [45, 13, 297, 10];
// Iterate over each number, create a Block, and add it to the
blockchain
testNumbers.forEach((num, index) => {
    const block = new Block(index + 1, new Date().toISOString(),
        num);
    blockchain.Add_Block(block);
    console.log(`Block ${index + 1} with number ${num} ${block.checkkaps() ? 'is a Kaprekar number.' : 'is not a Kaprekar number.'}`);
});
// Validate the entire blockchain
const isChainValid = blockchain.validate();
console.log(`\nIs the blockchain valid? ${isChainValid ? 'Yes' :
    'No'}`);
// Optionally, display the blocks in the blockchain
console.log("\nBlockchain:");
blockchain.chain.forEach((block, index) => {
    console.log(`Block ${index}:`, block);
});
console.log('Name:Shailesh Tagadghar, Roll no: 34, Date: 14-8-24');
