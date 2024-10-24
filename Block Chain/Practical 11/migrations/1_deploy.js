const Addition = artifacts.require("Addition");
module.exports = async function (deployer) {
  await deployer.deploy(Addition);
  const instance = await Addition.deployed();
  console.log("Addition deployed at:", instance.address);
};
