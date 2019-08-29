const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const { interface, bytecode } = require('./compile.js');


const provider = new HDWalletProvider(
    'leg easily pride cheese tip inmate dismiss early topple puzzle gallery obscure',
    'https://rinkeby.infura.io/v3/786c5aa8a98c4de986e7bcc185066f5a'
) 

const web3 = new Web3(provider);

let accounts;
let inbox;

async function deploy() {
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode,
        arguments: ['Hello']
    }).send({
        from: accounts[0],
        gas: '1000000'
    });
    console.log(inbox.options.address);
}

deploy();
