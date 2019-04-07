'use strict';
const axios = require('axios');

export class Account {

    constructor(id) {
        this.id = id;
        this.transactions = [];
    }

    add(amount) {
        this.transactions.push(amount);
    }

    getTransactions() {
        return this.transactions;
    }
}


export const getContent = (url) => {
    return axios.get(url);
};

export const getAccTransactions = () => {
    const myAccount = new Account(123);
    myAccount.add(100);
    myAccount.add(200);
    myAccount.add(300);
    return myAccount.getTransactions().join(", ");
};
