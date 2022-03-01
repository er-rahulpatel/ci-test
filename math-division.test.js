//The operation should return the sum of two numbers.

const { division } = require('./division');

test('16 / 2 = 8', () => {
    expect(division(16,2)).toBe(8);
})

test.each([[8,2,4],[6,2,3]]) (
    'a / b = c', (a,b, expected) => {
        expect(division(a,b)).toBe(expected)
    })