//arrow function and anonymous function 

const hello=function(val1,val2){
    
    return val1+val2;
}

const add=hello(5,7);

const fn = (arg) =>{
    console.log("This is Arrow function=",arg);
}


const n=(c) => c+ 100;
const sum=n(6,7);


console.log(add);
fn(10);
console.log(sum);





