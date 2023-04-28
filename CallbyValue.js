//call by Value
let num=10;
console.log(num);
hello(num);

function hello(n){
  n++
  console.log(n);
}

var obj1={
  name:'fayiz',
  place:"Aluva"
}
obj2=obj1;
obj2.name='rihan';
console.log(obj1);
console.log(obj2)
