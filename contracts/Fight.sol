pragma solidity ^0.4.17;

contract Fight {
    address[] public players;
    address public manager;

    function Fight() public {
        manager = msg.sender;
    }
    
    function enter() public payable{
        require(msg.value > 0.01 ether);
        players.push(msg.sender);
    }

    function pickWinner() public returns (uint) {
        require(msg.sender == manager);
        uint winner = uint(keccak256(block.difficulty, block.timestamp, players));
        winner = winner%players.length;
        players[winner].transfer(this.balance);
        delete players;
    }
}