//Here's a quick example to demonstrate the usage of the flat() method:

// Nested array with sub-arrays
var nestedArray = [1, [2, 3], [4, [5, 6]]];

// Flattening the nested array with depth 1
var flattenedArray = nestedArray.flat(1);

console.log(flattenedArray); // Output: [1, 2, 3, 4, [5, 6]]
