'use strict';

import {expect} from 'chai'
import {
    Account
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

