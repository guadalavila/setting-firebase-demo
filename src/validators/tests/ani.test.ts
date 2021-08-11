import { isAniValid } from '../ani';

describe('isANIValid', () => {
    const hardcodedAniValid = '1151666969';
    const hardcodedAniInvalid = '11516669';
    test('isANIValid', () => {
        const value = isAniValid(hardcodedAniInvalid);
        expect(value).toBeFalsy();
    });

    test('isANIValid', () => {
        const value = isAniValid(hardcodedAniValid);
        expect(value).toBeTruthy();
    });
});
