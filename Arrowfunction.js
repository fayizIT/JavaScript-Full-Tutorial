const hai= (b,g)=>{
    return b + g;
}
const add=hai(3, 700);
console.log( add)


const sub=(n1,n2) =>{
    return(n1-n2);
}
const substract=sub(800,200);  //substracting



const mul=(num1)=>(num1*10)   //multiplying simplyfying the arrow function 

const multiplication=mul(40);   



const div=(nm1,nm2)=>(nm1/nm2)   //division simplyfying the arrow function 
 const division=div(50,10);


const fn3 =() => "Hai Fayiz";
const h = fn3();

 console.log(substract,multiplication,division,h); //calling substract,multi,division


// return string
const hello=()=> "Hai Iam arrow function"
const a=hello();
console.log(a);

//return array

const arr=() => [2,4,6,3];
const ar =arr()
console.log(ar);


//  Return object

const obj=()=>({
    a:"fayiz",
    b:"Rihan",
    c:"Arshad"
});

const obje=obj();
console.log(obje);