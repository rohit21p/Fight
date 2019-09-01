const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const fs = require('fs');

const provider = new HDWalletProvider(
    'leg easily pride cheese tip inmate dismiss early topple puzzle gallery obscure',
    'https://rinkeby.infura.io/v3/786c5aa8a98c4de986e7bcc185066f5a'
);

const web3 = new Web3(provider);

let account;

async function pick() {
    account = await web3.eth.getAccounts();
    const ABI = JSON.parse(fs.readFileSync('ABI.json', {
        encoding: 'utf8'
    }));
    
    
    const address = fs.readFileSync('instance_address.txt', {
        encoding: 'utf8'
    });
    
    const contract = new web3.eth.Contract(ABI, address);
    
    
    contract.methods.pickWinner().send({
        gas : '4712357',
        from: account[0]
    });
}
pick();



