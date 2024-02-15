function random(min, max) {
    // Converting the inputs to floats for safe calculations
    min = parseFloat(min);
    max = parseFloat(max);
    // If max ain't a number, then we check if min ain't a number too
    if(Number.isNaN(max)) {
        // If both min and max ain't numbers, return NaN
        if(Number.isNaN(min)) return NaN;
        // If max ain't a number but min is, we swap 'em and set min to 0
        max = min;
        min = 0;
    }
    // If min and max are the same, then return that single number
    if(min === max) return min;
    // If min is greater than max, we gotta switch 'em up
    if(min > max) {
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