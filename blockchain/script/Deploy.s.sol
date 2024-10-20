// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console2} from "../src/Script.sol";
import {Token} from "../src/Token.sol";

contract Deploy is Script {

    function run() public {
        uint256 initialSupplyA = 1000 * 10 ** 18;
        uint256 initialSupplyB = 2000 * 10 ** 18;

        vm.startBroadcast();

        MyToken tokenA = new MyToken("TokenA", "TKA", initialSupplyA);
        MyToken tokenB = new MyToken("TokenB", "TKB", initialSupplyB);

        vm.stopBroadcast();
    }
}
