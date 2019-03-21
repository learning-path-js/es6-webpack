'use strict';

import Account from './Account';

const myAccount = new Account();
myAccount.deposit(200000, '2017-01-01');
myAccount.deposit(500000, '2017-02-02');
myAccount.deposit(100000, '2017-03-03');
myAccount.withdraw(300000, '2017-04-04');
myAccount.withdraw(700000, '2017-04-05');
myAccount.withdraw(990000, '2017-04-09');

const transactionRowFormatter = transaction => `<li>${transaction.amount} (${transaction.date})</li>`;

const list = document.querySelector('.js-top-transactions');
list.innerHTML = myAccount.getTopTransaction(3).map(transactionRowFormatter).join('');