pragma solidity ^0.4.17;

contract Fight {
    address[] public players;
    
    function enter() public payable{
        require(msg.value > 0.1 ether);
        players.push(msg.sender);
    }
}