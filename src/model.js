'use strict';


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