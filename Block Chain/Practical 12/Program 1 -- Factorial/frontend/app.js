const contractAddress = "0x28c0b6BA8A4690071a01609F508669892A532E88"; // Replace with your deployed contract address
const contractABI = [
    {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "n",
            "type": "uint256"
          }
        ],
        "name": "fact",
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
async function facto() {
    const num = document.getElementById("num").value;
    const accounts = await web3.eth.getAccounts();
    console.log(num);
    
    // Call the contract's method
    contract.methods.fact(num)
      .call({ from: accounts[0] })
      .then((result) => {
        console.log(result);
        document.getElementById("result").innerText = `${result}`;
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("result").innerText = "Error fetching result.";
      });
  }
  
