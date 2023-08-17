// map(): Creates a new array by applying a provided function to each element of the original array.


var numbers = [1, 2, 3, 4];
var doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // Output: [2, 4, 6, 8]
