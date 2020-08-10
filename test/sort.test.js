const sort = require('../sort/sort');
const expect = require('chai').expect;

describe('Rearranges numbers in array to ascending order', () => {
    it('should rearrange array to ascending order', () => {
        // define inputs
        const list = [8, 3, 6, 1];
        const expectedList = [1, 3, 6, 8];

        // invoke the function
        const actualList = sort(list);

        // assert that expected === actual
        expect(actualList).to.deep.equal(expectedList);
    })

    it('should return an array', () => {
        // define inputs
        const list = [8, 3, 6, 1];
        
        // set up the function call
        const newList = () => {
            return sort(list);
        };

        // assert that returned object is an array
        expect(newList()).to.be.an('array');
    })
})