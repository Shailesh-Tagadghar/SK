const factorial = artifacts.require("factorial");
module.exports = async function (deployer) {
  await deployer.deploy(factorial);
  const instance = await factorial.deployed();
  console.log("Operations deployed at:", instance.address);
};
