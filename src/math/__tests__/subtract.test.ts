import { subtract } from '../subtract';

describe('Testing Subtract', () => {
    test('Basic operation', () => {
        const result = subtract(2,5);
        expect(result).toBe(-3);
    });

    test('Basic operation', () => {
        const result = subtract(2,0);
        expect(result).not.toBe(7);
    });

});
