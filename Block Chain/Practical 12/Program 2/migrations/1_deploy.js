const transaction = artifacts.require("transactions");
module.exports = async function (deployer) {
  await deployer.deploy(transaction);
  const instance = await transaction.deployed();
  console.log("Contract deployed at:", instance.address);
};
