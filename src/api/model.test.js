'use strict';

import {expect} from 'chai'
import {
    Account, getAccTransactions
} from "./model"


describe('Account', () => {

    it('should return transactions list properly', () => {
        const acc = new Account(123);
        acc.add(100);

        expect(acc.getTransactions().join()).to.equal([100].join());
    });

    xit('this test is in a pending mode', () => {
    });
});


describe('getAccTransactions', () => {

    it('getAccTransactions should return transactions as string', () => {
        expect(getAccTransactions()).to.equal("100, 200, 300");
    });

});


