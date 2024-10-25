const contractAddress = "0x18Dd153Ee1a4aaD185229420A179D308119952B5"; // Replace with your deployed contract address
const contractABI = [
    {
        "anonymous": false,
        "inputs": [
          {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
          },
          {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
          }
        ],
        "name": "Transfer",
        "type": "event"
      },
      {
        "stateMutability": "payable",
        "type": "receive",
        "payable": true
      },
      {
        "inputs": [
          {
            "internalType": "address payable",
            "name": "_to",
            "type": "address"
          }
        ],
        "name": "transfers",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
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
async function send() {
  const accounts = await web3.eth.getAccounts();
  const amount = web3.utils.toWei(
    document.getElementById("amount").value,
    "ether"
  );
  const toAddress = document.getElementById("toAddr").value;
  const sender = accounts[0];
  console.log("Sender: ", accounts[0]);
  console.log("Receiver: ", toAddress);
  console.log("Amount: ", amount);
  if (amount <= 0) {
    alert("Amount must be greater than 0");
    return;
  } else if (toAddress == "") {
    alert("Please enter receiver address");
    return;
  } else {
    contract.methods
      .transfers(toAddress)
      .send({
        from: sender,
        value: amount,
      })
      .on("transactionHash", (hash) => {
        console.log("Transaction Hash:", hash);
      })
      .on("receipt", (receipt) => {
        console.log("Transaction Receipt:", receipt);
      })
      .on("error", (error) => {
        console.error("Error:", error);
      });
  }
}
async function checkBalance() {
  const accounts = await web3.eth.getAccounts();
  const balance = await web3.eth.getBalance(accounts[0]);
  const balanceInEther = web3.utils.fromWei(balance, "ether");
  document.getElementById("bal").innerText = `${balanceInEther}`;
}
