/**
 * @summary Counts the decimal places of a number.
 * @description takes a number as input, converts it to a floating-point number, and then checks if it's a valid number. If it's not valid, it returns NaN. If it is valid, it counts the number of digits after the decimal point and returns that count.
 * @example
 * const decimalCount = deciCount(3.14);
 * // Returns 2
 * @param {number} num - The number to count decimal places for.
 * @returns {number} The count of decimal places. Returns NaN if the input is not a number.
 */
deciCount = (num) => {
    num = Number.parseFloat(num);
    if(Number.isNaN(num)) return NaN;
    return (num.toString().split('.')[1] || '').length ;
}

/**
 * @summary Generates a random number within a specified range, maintaining the same decimal precision as the inputs. 
 * @description The min and max are converted into floating-point numbers. If either value is not a valid number, it attempts to handle the situation gracefully by setting it to 0 (if only one of them is not a number) or returning NaN (if both are not numbers). If the minimum value is greater than the maximum value, it swaps them to ensure the minimum value is less than or equal to the maximum value. The result is rounded to the same number of decimal places as the more precise of the maximum and minimum values.
 * @example
 * const randomNumber = random(10, 20.5);
 * // Returns a random number between 10 and 20.5, with 1 decimal place.
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @returns {number} A random number within the specified range.
 */
random = (min, max) => {
    /* In future iterations, consider using the unary plus operator to convert: min = +min; max = +max; */
    min = Number.parseFloat(min);
    max = Number.parseFloat(max);
    if(Number.isNaN(min)) {
        /* Consider returning 0 as a default value for consistency. */
        if(Number.isNaN(max)) return NaN;
        min = 0;
    } else if(Number.isNaN(max)) max = 0;
    if(min === max) return min;
    if(min > max) {
        /* In future iterations, consider swapping values with destructuring: [min, max] = [max, min];  */
        const temp = min;
        min = max;
        max = temp;
    }
    const randomValue = Math.random() * (max - min) + min;
    return Number.parseFloat(randomValue.toFixed(Math.max(deciCount(max), deciCount(min))));
}


module.exports = { deciCount, random }