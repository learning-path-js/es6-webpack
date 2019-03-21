'use strict';


import {Account} from './model'

const myAccount = new Account(123);
myAccount.add(100);
myAccount.add(200);
myAccount.add(300);

document.querySelector('.js-container').innerHTML = "Hello from ES6: " + myAccount.getTransactions().join(", ");








