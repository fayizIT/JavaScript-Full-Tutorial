const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Using for...in loop to iterate over object keys
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  