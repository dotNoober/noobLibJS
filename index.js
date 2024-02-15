exports.random = function (min, max) {
    // Converting the inputs to floats for safe calculations
    //**in the future compare to using unary plus operator min = +min;max = +max; */
    //------------------------------------------------------------------------------
    min = parseFloat(min);
    max = parseFloat(max);
    // If min ain't a number, then we check if max ain't a number too
    if(Number.isNaN(min)) {
        // If both min and max ain't numbers, return NaN
        if(Number.isNaN(max)) return NaN;
        // If min ain't a number but max is, we set min to 0
        min = 0;
    // Else if min is a number but max ain't, we set max to 0
    } else if(Number.isNaN(max)) max = 0;
    // If min and max are the same, then return that single number
    if(min === max) return min;
    // If min is greater than max, we gotta switch 'em up
    if(min > max) {
        //** in the future compare to [min, max] = [max, min];  */
        //---------------------------------------------------------
        const temp = min;
        min = max;
        max = temp;
    }
    // Calculate the range between max and min
    const range = max - min;
    // Count the decimal places of the range
    const decimalPlaces = (range.toString().split('.')[1] || '').length;
    // Generate the random value within the range 
    const randomValue = Math.random() * range + min;
    // Return the random value with the same number of decimal places as the range
    return parseFloat(randomValue.toFixed(decimalPlaces));
}