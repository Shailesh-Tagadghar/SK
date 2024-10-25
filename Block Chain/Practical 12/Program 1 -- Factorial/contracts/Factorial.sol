// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;
contract factorial {
    function fact(uint n) public pure returns (uint) {
        if (n == 0) {
            return 1;
        } else {
            uint result = 1;
            for (uint i = 1; i <= n; i++) {
                result *= i;
            }
            return result;
        }
    }
}
