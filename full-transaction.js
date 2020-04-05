/*##########################

CONFIGURATION
##########################*/

// -- Step 1: Set up the appropriate configuration 
var Web3 = require("web3") 
var EthereumTransaction = require("ethereumjs-tx") .Transaction
var web3 = new Web3('HTTP://127.0.0.1:7545')

// -- Step 2: Set the sending and receiving addresses for the transaction. 
//var sendingAddress = '0x315C2e989e9AF23B0683CD136913ebA2c6267F46' 
//var receivingAddress = '0x4f99922f9D08e05f86889495fa4c4dA25bdf06ca'

var sendingAddress = "0x815d25E5416cEa8b3494F88585be939e9d08155a"
var receivingAddress = "0x89BF3392F96340d9406A309Ee9c2FCdB9FB95FEB"

// -- Step 3: Check the balances of each address 
// bal1 = web3.eth.getBalance(sendingAddress, (err,bal) => {
//     return bal;
// })
// bal2 = web3.eth.getBalance(receivingAddress,(err,bal) => {
//    return bal;
// });
// bal1 = web3.eth.getBalance(sendingAddress).then((data) => {console.log("Bal1" + data.toString())})
// bal2 = web3.eth.getBalance(receivingAddress).then(console.log)

// Promise.all([bal1,bal2])

// console.log(bal1)
// console.log(bal2)


/*##########################

CREATE A TRANSACTION
##########################*/

// -- Step 4: Set up the transaction using the transaction variables as shown 
var rawTransaction = { nonce: 1, to: receivingAddress, gasPrice: 20000000000, gasLimit: 6721975, value: 10, data: 11 }

// -- Step 5: View the raw transaction 
console.log(rawTransaction)

// -- Step 6: Check the new account balances (they should be the same) 
web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// Note: They haven't changed because they need to be signed...

/*##########################

Sign the Transaction
##########################*/

// -- Step 7: Sign the transaction with the Hex value of the private key of the sender v
var privateKeySender = '29e3b18159be3da2a7edf15c6608aceaa1a99158b821a577ce75a71f85426755' 
var privateKeySenderHex = new Buffer(privateKeySender, 'hex') 
var transaction = new EthereumTransaction(rawTransaction) 
transaction.sign(privateKeySenderHex)

/*#########################################

Send the transaction to the network
#########################################*/

// -- Step 8: Send the serialized signed transaction to the Ethereum network. 
var serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction);