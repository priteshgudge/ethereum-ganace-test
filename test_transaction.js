
var Web3 = require("web3") 
var EthereumTransaction = require("ethereumjs-tx") 
var url = "http://127.0.0.1:8545"
var web3 = new Web3(new Web3.providers.HttpProvider(url))

var sendingAddress = '0x7E0b55C703FbF6b075258EB9CAF8F9fCA611F656' 
var receivingAddress = '0x0c90F7F8a16D5294DBa66F2Ded9382f8b31780C9'

web3.eth.getBalance(sendingAddress,function(error,result){

    if(error){
       console.log(error)
    }
    else{
       console.log(result)
    }
 })

web3.eth.getBalance(receivingAddress,function(error,result){

    if(error){
       console.log(error)
    }
    else{
       console.log(result)
    }
 })

 var rawTransaction = { nonce: 0, to: receivingAddress, gasPrice: 20000000, gasLimit: 30000, value: 1, data: "0x134e0039f1c1a46d656225030b206c5d92c36ea01be94b73e626c21437a55acb" }

 privateKeySender = '134e0039f1c1a46d656225030b206c5d92c36ea01be94b73e626c21437a55acb' 
 var privateKeySenderHex = new Buffer(privateKeySender, 'hex') 
 var transaction = new EthereumTransaction.Transaction(rawTransaction) 
 transaction.sign(privateKeySenderHex)

 var serializedTransaction = transaction.serialize(); 
 // For web3 0.x.x use below, for web3 1.x.x use sendSignedTransaction
 web3.eth.sendRawTransaction(serializedTransaction, function(error, result){
    if(error){
        console.log(error)
     }
     else{
        console.log(result)
     }
 });


 web3.eth.getBalance(sendingAddress,function(error,result){

    if(error){
       console.log(error)
    }
    else{
       console.log(result)
    }
 })

web3.eth.getBalance(receivingAddress,function(error,result){

    if(error){
       console.log(error)
    }
    else{
       console.log(result)
    }
 })