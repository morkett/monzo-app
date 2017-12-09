const {USER_ID, ACCOUNT_ID, FULL_ACCOUNT_ID, ACCESS_TOKEN, BASE_URL, options } = require(ROOT + '/config');
var request = require('request');
var rp = require('request-promise');



function getAccounts(req,res) {

  options.url = `${BASE_URL}/accounts`;

  rp(options)
    .then(function (accounts) {
      accounts = JSON.parse(accounts);
      console.log(accounts);
      // res.render(accounts);
      res.render('./pages/account.ejs', {
        title: 'Accounts',
        accounts: accounts
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getOneAccount(req, res) {
  const id = req.params.id;
  options.url = `${BASE_URL}/transactions?expand[]=merchant&account_id=${id}`;

  rp(options)
    .then(function (transactions) {
      transactions = JSON.parse(transactions);
      console.log(transactions);
      // res.render(accounts);
      res.render('./pages/account.ejs', {
        title: 'Account',
        transactions: transactions
      });
    })
    .catch(function (err) {
      console.log(err);
    });
}


module.exports = {
  getAccounts: getAccounts,
  getOneAccount: getOneAccount
};
