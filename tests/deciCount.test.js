const { deciCount } = require('../index.js');

describe('deciCount function', () => {
  test('should return the number of decimal places', () => {
    expect(deciCount(3.14159)).toBe(5);
    expect(deciCount(123.456)).toBe(3);
    expect(deciCount(7)).toBe(0);
    expect(deciCount(0)).toBe(0);
    expect(deciCount(-123.456)).toBe(3);
  });

  test('should return NaN for non-numeric input', () => {
    expect(deciCount('abc')).toBeNaN();
    expect(deciCount(null)).toBeNaN();
    expect(deciCount(undefined)).toBeNaN();
  });
});
