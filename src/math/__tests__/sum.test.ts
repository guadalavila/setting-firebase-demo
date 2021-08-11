import { add } from '../add';

describe('Testing Sum', () => {
    test('Basic operation', () => {
        const result = add(2,5);
        expect(result).toBe(7);
    });

    test('Basic operation', () => {
        const result = add(2,0);
        expect(result).not.toBe(7);
    });

});
