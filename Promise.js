console.log("started");

const pr=myFetch ("https://jsonplaceholder.typicode.com/todos/2")

function buttonclick() {
    console.log("clicked");
    pr.then((data)=>{
        console.log(data);
    },(err)=>{
        console.log(err);
    });
   
}

console.log("ended");


