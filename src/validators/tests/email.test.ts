import { isEmailValid } from '../email';

describe('Validate email', () => {
    test('email guadalupe@mail.com valid', () => {
        expect(isEmailValid('guadalupe@mail.com')).toBe(true);
    });

    test('Empty string not valid', () => {
        expect(isEmailValid('')).toBe(false);
    });

    test('No double @ in an email', () => {
        expect(isEmailValid('guadalupe@mail@.com')).toBe(false);
    });

    test('not trimmed email to be false', () => {
        expect(isEmailValid('guadalupe@mail.com ')).toBe(false);
    });
});
