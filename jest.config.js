module.exports = {
    transform: {'^.+\\.ts?$': 'ts-jest'},
    roots: ['<rootDir>/src'],
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '/tests/.*\\.(test|spec)?\\.(ts)$',
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    testPathIgnorePatterns: ['<rootDir>/node_modules/'],
    coveragePathIgnorePatterns: ['/node_modules/', '.+\\.(css|styl|less|sass|scss)$'],
};
