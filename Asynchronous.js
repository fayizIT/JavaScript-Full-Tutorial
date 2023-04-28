//asynchronous callbacks (using index.html and add a button)
console.log("one");
document.getElementById("head").onclick=myfunction;

function myfunction(arg){
    console.log(arg);
}

 myfuction(10);
console.log("two"); 