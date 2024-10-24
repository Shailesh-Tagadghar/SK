// const Addition = artifacts.require("Addition");
// contract("Addition", () => {
//   it("should add two numbers correctly", async () => {
//     const addition = await Addition.deployed();
//     console.log("Contract Address: ", addition.address);
//     const result = await addition.add(5, 3);
//     assert.equal(result.toNumber(), 8, "Addition of 5 and 3 should be 8");
//   });
// });

const Operations = artifacts.require("Operations");
contract("Operations", () => {
  let operationsInstance;
  before(async () => {
    operationsInstance = await Operations.deployed();
  });
  it("should add two numbers correctly", async () => {
    console.log("Contract Address: ", operationsInstance.address);
    const resultA = await operationsInstance.add(5, 2);
    assert.equal(resultA.toNumber(), 7, "Addition of 5 and 2 should be 7");
  });
  it("should subtract two numbers correctly", async () => {
    console.log("Contract Address: ", operationsInstance.address);
    const resultS = await operationsInstance.sub(5, 2);
    assert.equal(resultS.toNumber(), 3, "Subtraction of 5 and 2 should be 3");
  });
  it("should multiply two numbers correctly", async () => {
    console.log("Contract Address: ", operationsInstance.address);
    const resultM = await operationsInstance.mul(5, 2);
    assert.equal(
      resultM.toNumber(),
      10,
      "Multiplication of 5 and 2 should be 10"
    );
  });
  it("should divide two numbers correctly", async () => {
    console.log("Contract Address: ", operationsInstance.address);
    const resultD = await operationsInstance.div(5, 5);
    assert.equal(resultD.toNumber(), 1, "Division of 5 and 5 should be 1");
  });
});