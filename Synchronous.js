//Synchronous callbacks
console.log("one");

const a=[2,4,5,7,3,8];

function myfunction(arg){
    console.log(arg);

}

a.forEach(myfunction);               
console.log("two"); 


//we can be call the function like this

a.forEach(function myfunction(arg){
    console.log(arg)
}) 