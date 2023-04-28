// //destructring
const obj1={
    name:"hello",
    age:45,
    state:"kerala"
}
function h(){
    const{
        name,...next
    }=obj1
    console.log(name,next)
}
h();
class student{
    name;
    age;
    constructor(){
        this.name=name;
        this.age=age;
    }

    getName(){
        return this.name;
    };

    getAge(){
        return this.age;
    };
}


var student1=new student("fayiz",35);
var student2=new student("rihan",66);

console.log(student1,student1.getName(),student1.getAge());
console.log(student2,student2.getName(),student2.getAge());
