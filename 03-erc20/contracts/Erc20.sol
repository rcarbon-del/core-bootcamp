// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract rorrarror is ERC20 {
    constructor(uint256 initialSupply) ERC20("rorable", "ror") {
        _mint(msg.sender, initialSupply);
    }

    function generateTokens(address destination, uint256 amount) public {
        _mint(destination, amount);
    }
}