const Addition = artifacts.require("Addition");
contract("Addition", () => {
  it("should add two numbers correctly", async () => {
    const addition = await Addition.deployed();
    console.log("Contract Address: ", addition.address);
    const result = await addition.add(5, 3);
    assert.equal(result.toNumber(), 8, "Addition of 5 and 3 should be 8");
  });
});
