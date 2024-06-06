import {NumbersValidator} from "../../app/numbers-validator.js";
import {expect} from 'chai';

describe('getEvenNumbersFromArray', () => {
    let validator;

    beforeEach(() => {
        validator = new NumbersValidator()
    });

    afterEach(() => {
        validator = null;
    });

    it('should return an array of even numbers', () => {
        const arrayOfNumbers = [1, 2, 3, 4, 5];
        const evenNumbersArray = validator.getEvenNumbersFromArray(arrayOfNumbers);
        expect(evenNumbersArray).to.be.eql([2, 4]);
    });

    it ('should throw an error when it is not array of numbers', () => {
        const arrayOfValues = [1, '2', 3];
        expect(() => {
            validator.getEvenNumbersFromArray(arrayOfValues);
    }).to.throw('[1,2,3] is not an array of "Numbers"');
    });
});
