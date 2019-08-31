const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');
const { interface, bytecode } = require('./compile.js');
const fs = require('fs');


const provider = new HDWalletProvider(
    'leg easily pride cheese tip inmate dismiss early topple puzzle gallery obscure',
    'https://rinkeby.infura.io/v3/786c5aa8a98c4de986e7bcc185066f5a'
) 

const web3 = new Web3(provider);

async function deploy() {
    accounts = await web3.eth.getAccounts();
    new web3.eth.Contract(JSON.parse(interface)).deploy({
        data: bytecode
    }).send({
        from: accounts[0],
        gas: '1000000'
    }).then(instance => {
        fs.writeFile("instance_address.txt", instance.options.address);
    });
    fs.writeFile("ABI.json", interface);
}

deploy();
