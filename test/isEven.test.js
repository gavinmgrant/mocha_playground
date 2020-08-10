const expect = require('chai').expect;
const isEven =require('../isEven');

describe('isEven', () => {
    it('shoudl find 4 to be even', () => {
        expect(isEven(4)).to.be.true;
    });

    it('shoudl find 5 to not be even', () => {
        expect(isEven(5)).to.be.false;
    });
});