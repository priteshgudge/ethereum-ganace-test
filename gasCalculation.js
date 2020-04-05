// Configuration
var Web3 = require("web3")
var EthereumTransaction = require("ethereumjs-tx")
var web3 = new Web3('HTTP://127.0.0.1:8545')

// Set Addresses
var sendingAddress = '0x315C2e989e9AF23B0683CD136913ebA2c6267F46'
var receivingAddress = '0x4f99922f9D08e05f86889495fa4c4dA25bdf06ca'
var number = null;

web3.eth.getTransactionCount("0x315C2e989e9AF23B0683CD136913ebA2c6267F46").then(
    result => {
        number = result
    }
).catch(err => {
    console.log(err)
});

// Create transaction
var rawTransaction = {
    nonce: 2,
    to: receivingAddress,
    gasPrice: 20000000000,
    gasLimit: 6721975,
    value: 0,
    data: 11
}

// Sign Transaction
var privateKeySender = '919be63bef3d45c94a95bd04a48c4c891c1ed1919b52465f6b7b4c1a6fadcad4'
var privateKeySenderHex = new Buffer(privateKeySender,'hex')
var transaction = new EthereumTransaction.Transaction(rawTransaction)
transaction.sign(privateKeySenderHex)
var serializedTransaction = transaction.serialize();
web3.eth.sendSignedTransaction(serializedTransaction);