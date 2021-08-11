module.exports = {
    transform: {'^.+\\.ts?$': 'ts-jest'},
    testEnvironment: 'node',
    // testRegex: '/tests/.*\\.(test|spec)?\\.(ts)$',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node']
};
