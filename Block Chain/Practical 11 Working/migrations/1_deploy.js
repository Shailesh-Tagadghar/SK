const Operations = artifacts.require("Operations");

module.exports = async function (deployer) {
    await deployer.deploy(Operations);
    const instance = await Operations.deployed();
    console.log("Operations deployed at:", instance.address);
};