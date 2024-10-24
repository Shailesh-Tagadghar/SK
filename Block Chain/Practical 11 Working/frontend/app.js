const contractAddress = '0x1C8d3e719A585e42c753fA6a649Cbc1f3a77e590'; // Replace with your deployed contract address
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
      },
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
        "name": "sub",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
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
        "name": "mul",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "pure",
        "type": "function"
      },
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
        "name": "div",
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
];

let web3;
let contract;

window.addEventListener('load', async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' }); // Use eth_requestAccounts instead of enable
    } else {
        console.log('MetaMask not detected. Please install MetaMask.');
    }

    contract = new web3.eth.Contract(contractABI, contractAddress);
});

async function addNumber() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const result = await contract.methods.add(num1, num2).call();
    document.getElementById('resultA').innerText = result;
}

async function subNumber() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const result = await contract.methods.sub(num1, num2).call(); // Updated to 'sub'
    document.getElementById('resultS').innerText = result;
}

async function mulNumber() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const result = await contract.methods.mul(num1, num2).call(); // Updated to 'mul'
    document.getElementById('resultM').innerText = result;
}

async function divNumber() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    try {
        const result = await contract.methods.div(num1, num2).call(); // Updated to 'div'
        document.getElementById('resultD').innerText = result;
    } catch (error) {
        console.error(error);
        document.getElementById('resultD').innerText = "Error: " + error.message;
    }
}
