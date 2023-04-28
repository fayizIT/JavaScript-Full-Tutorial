//difference between Anonymou function & Arrow function

//Eg with object

const obj ={
    a:200,
    b:300,
    myfun:function() {
        return this.a+this.b;
    }
}
console.log(obj.myfun());

//NaN (not a Number)showing  using arrow function

const obje= {
    a:200,
    b:500,
    fu:()=>{
        return this.a+this.b;// using this keword in object
    }
}

console.log(obje.fu());

