const {getAccounts, getOneAccount} = require(ROOT+'/controllers/monzo/monzo-controller');
__routes.get('/', getAccounts);
__routes.get('/account/:id', getOneAccount);
