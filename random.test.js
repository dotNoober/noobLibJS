const { random } = require('./index.js');

describe('random function', () => {
    test('returns NaN if both inputs are not numbers', () => {
        expect(random('a', 'b')).toBeNaN();
    });

    test('returns the input number if min and max are the same', () => {
        expect(random(5, 5)).toBe(5);
    });

    test('returns the number between 0 and the input if only 1 parameter is provided', () => {
        expect(random(5)).toBeGreaterThanOrEqual(0);
        expect(random(5)).toBeLessThanOrEqual(5);
    });

    test('ignores NaN inputs if 1 parameter a number', () => {
        expect(random('a', 5)).toBeGreaterThanOrEqual(0);
        expect(random('a', 5)).toBeLessThanOrEqual(5);
    });

    test('returns a number within the range of min and max', () => {
        const min = 1;
        const max = 10;
        const result = random(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test('returns a negative number within the range of min and max', () => {
        const min = -10;
        const max = -1;
        const result = random(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test('handles negative and positive min and max values correctly', () => {
        const min = -10;
        const max = 10;
        const result = random(min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
    });

    test('handles swapping min and max if min is greater than max', () => {
        expect(random(10, 1)).toBeGreaterThanOrEqual(1);
        expect(random(10, 1)).toBeLessThanOrEqual(10);
    });

    test('handles swapping negative and positive min and max values if min is greater than max', () => {
        expect(random(10, -1)).toBeGreaterThanOrEqual(-1);
        expect(random(10, -1)).toBeLessThanOrEqual(10);
    });

    test('returns a number with the same number of decimal places as the range', () => {
        const min = 1.111;
        const max = 10.1234;
        const result = random(min, max);
        const decimalPlaces = (max.toString().split('.')[1] || '').length;
        const resultDecimalPlaces = (result.toString().split('.')[1] || '').length;
        expect(resultDecimalPlaces).toBe(decimalPlaces);
    });

    /**
     * @todo: decimalPlaces is used in function and in test, could be a good seperate function to add to library.
     */
});