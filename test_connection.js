var Web3 = require('web3')

var url = 'HTTP://127.0.0.1:8545' // 8545 if using ganache-cli

var web3 = new Web3(new Web3.providers.HttpProvider(url))

console.log(web3)

web3.eth.getAccounts(function(error, accounts) {
    console.log(accounts)
  });

  