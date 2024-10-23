Program 2 -- write a simple auction contract where user can bid on an items when a highest user bid.



// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AuctionC {
    address public o;
    uint256 public hb;
    address public hba;
    bool public oe;

    constructor() {
        o = msg.sender;
        hb = 0;
        oe = false;
    }

    function bid(uint a) public {
        require(!oe, "Auction has already ended");
        require(a > hb, "Bid must be greater then current value");
        hb = a;
        hba = msg.sender;
    }

    function endA() public {
        require(msg.sender == o, "only owner can end");
        oe = true;
    }

    function withdraw() public view returns (uint256) {
        require(msg.sender == hba, "only highest bidder can withdraw");
        return hb;
    }
}
