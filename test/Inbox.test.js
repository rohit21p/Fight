const Web3 = require('web3');
const ganache = require('ganache-cli');
const { interface, bytecode } = require('../compile.js');
const provider = ganache.provider();
const web3 = new Web3(provider);
const assert = require('assert');

let accounts;
let inbox;


beforeEach(async ()=>{
    await web3.eth.getAccounts().then( async data=> {
        accounts = data;
        inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({
            data: bytecode,
            arguments: ['Hello!']
        }).send({
            from: accounts[0],
            gas: '1000000'
        }).then(data=>{
            return data;
        });
    });
})

describe('web3',()=>{
    it('deployed',async ()=>{
        await inbox.methods.setMessage("working").send({
            from: accounts[0],
            gas: '1000000'
        })
        title = await inbox.methods.getMessage().call()
        console.log(title);
        assert.ok(inbox.options.address);
    });
})