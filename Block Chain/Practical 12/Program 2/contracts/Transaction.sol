// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
contract transactions {
    event Transfer(address indexed from, address indexed to, uint256 value);
    function transfers(address payable _to) public payable {
        require(msg.value > 0, "Send some ether");
        _to.transfer(msg.value);
        emit Transfer(msg.sender, _to, msg.value);
    }
    receive() external payable {
        emit Transfer(msg.sender, address(this), msg.value);
    }
}
