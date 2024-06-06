import {NumbersValidator} from "../../app/numbers-validator.js";
import {expect} from "chai";

describe('isAllNumbers', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null;
    });

    it('should return true when provided array of numbers', () => {
        const arrayOfOnlyNumbers = validator.isAllNumbers([1, 2, 3]);
        expect(arrayOfOnlyNumbers).to.be.equal(true);
    });

    it('should throw an error when it is not all numbers', () => {
        expect(() => {
            validator.isAllNumbers(true);
        }).to.throw('[true] is not an array');
    });
});