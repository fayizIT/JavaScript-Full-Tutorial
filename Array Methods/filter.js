// filter(): Creates a new array containing all elements that pass a provided test function
var numbers = [1, 2, 3, 4, 5];
var evens = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evens); // Output: [2, 4]
