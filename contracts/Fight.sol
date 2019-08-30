pragma solidity ^0.4.17;

contract Fight {
    address[] public players;
    address public manager;

    function Fight() public {
        manager = msg.sender;
    }
    
    function enter() public payable{
        require(msg.value > 0.1 ether);
        players.push(msg.sender);
    }
}