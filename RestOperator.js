const obj1={
  name:"fayiz",
  place:"aluva",
  state:"kerala"
}

function hello(){
 const { 
  name,
  ...rest
}=obj1
console.log(name,rest)
}
hello();