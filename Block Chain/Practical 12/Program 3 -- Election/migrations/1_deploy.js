const vote = artifacts.require("voting");
module.exports = async function (deployer) {
  await deployer.deploy(vote);
  const instance = await vote.deployed();
  console.log("Contract deployed at:", instance.address);
};
