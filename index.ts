export const moveZeros = (array: any[]) => { // array will contain multiple types (number, string, boolean, etc.)
    let zeros: number[] = []; // array of zeros; number type
    let nonZeros: any[] = []; // array of values not equal to zero; any type
    for (let i = 0; i < array.length; i++) { // loop from index 0 to array.length - 1
        if (array[i] === 0) {
            zeros.push(array[i]); // add all zeros to the first array
        } else {
            nonZeros.push(array[i]) // add all non-zeros to the second array
        }
    }
    array = nonZeros.concat(zeros); // merge the arrays
    console.log(...array); // print all elements in the array (spread...)
}
moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // pass an array as argument and call out the function