// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
contract voting {
    mapping(string => uint256) public c;
    mapping(address => bool) public voters;
    string[] public cn;
    constructor() {
        cn = ["Can1", "Can2", "Can3"];
    }
    function vote(string memory caNm) public {
        require(!voters[msg.sender], "Already Voting Done.");
        bool ce = false;
        for (uint256 i = 0; i < cn.length; i++) {
            if (keccak256(bytes(caNm)) == keccak256(bytes(cn[i]))) {
                ce = true;
                break;
            }
        }
        require(ce, "Candidate does not exist.");
        c[caNm]++;
        voters[msg.sender] = true;
    }
    function getVoterC(string memory canM) public view returns (uint256) {
        return c[canM];
    }
    function getWinner() public view returns (string memory) {
        string memory winner;
        uint256 temp = 0;
        for (uint256 j = 0; j < cn.length; j++) {
            if (getVoterC(cn[j]) > temp) {
                temp = getVoterC(cn[j]);
                winner = cn[j];
            }
        }
        return winner;
    }
    function showPercentage(string memory canM) public view returns (uint256) {
        uint256 total;
        for (uint256 i = 0; i < cn.length; i++) {
            total = total + getVoterC(cn[i]);
        }
        uint256 per = getVoterC(canM) * (100 / total);
        return per;
    }
}
