import {NumbersValidator} from '../../app/numbers-validator.js';
import {expect} from 'chai';

describe('isInteger', () => {
    let validator;
    beforeEach(() => {
        validator = new NumbersValidator();
    });

    afterEach(() => {
        validator = null;
    });

    it('should return true when provided an integer number', () => {
        const validationNumber = validator.isInteger(4);
        expect(validationNumber).to.be.equal(true); 
    });

    it('should return false when provided not integer number', () => {
        const validationNumber = validator.isInteger(4.1);
        expect(validationNumber).to.be.equal(false); 
    });

    it('should throw an error when provided not number', () => {
        expect(() => {
            validator.isInteger('2');
        }).to.throw('[2] is not a number');
    });
});