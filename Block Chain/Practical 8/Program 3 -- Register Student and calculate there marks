//Create a smart contract to create a student portal and register a new student having the details Name, IdNo, Address, 3 subject marks, percentage and grade.

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract studentC {
    struct std {
        uint256 sid;
        string name;
        address addr;
        uint256 BCT;
        uint256 ML;
        uint256 BDA;
        uint256 percent;
        string grade;
    }
    mapping(uint256 => std) public student;

    function register(
        uint256 i,
        string memory n,
        uint256 b,
        uint256 m,
        uint256 a
    ) public {
        student[i].name = n;
        student[i].addr = msg.sender;
        student[i].sid = i;
        student[i].BCT = b;
        student[i].ML = m;
        student[i].BDA = a;
        uint256 p = (b + m + a) / 3;
        student[i].percent = p;
        if (p >= 80) {
            student[i].grade = "O";
        } else if (p >= 60 && p < 80) {
            student[i].grade = "A";
        } else if (p >= 40 && p < 60) {
            student[i].grade = "B";
        } else {
            student[i].grade = "F";
        }
    }
}
