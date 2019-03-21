'use strict';
import {sortBy, first} from 'underscore';

class Account {

    constructor(name) {
        this.name = name;
        this.transactions = [];
    }

    deposit(amount, date) {
        this.transactions.push({
            amount,
            date
        });
    }

    withdraw(amount, date) {
        this.transactions.push({
            amount: -amount,
            date
        });
    }

    getTopTransaction(count) {
        const sortedTransactions = sortBy(this.transactions, val => -Math.abs(val.amount));
        return first(sortedTransactions, count);
    }
}

export default Account;



