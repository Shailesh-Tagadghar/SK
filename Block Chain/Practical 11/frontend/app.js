const contractAddress = "0x7DC395101A5C8779e571df76e1fF31e84622E177"; // Replace with your deployed contract address
const contractABI = [
    {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "a",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "b",
            "type": "uint256"
          }
        ],
        "name": "add",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      }
]; // Use ABI from compiled contract
let web3;
let contract;
window.addEventListener("load", async () => {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else {
    console.log("MetaMask not detected. Please install MetaMask.");
  }
  contract = new web3.eth.Contract(contractABI, contractAddress);
});
async function addNumber() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const accounts = await web3.eth.getAccounts();
  console.log(num1);
  console.log(num2);
  contract.methods
    .add(num1, num2)
    .call({ from: accounts[0] })
    .then((result) => {
      console.log(result);
      document.getElementById("result").innerText = `${result}`;
    });
}
