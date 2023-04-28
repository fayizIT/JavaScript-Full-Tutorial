//nestes destructring
var obj={
    name:'fayiz',
    age:12,
    place:'aluva',
    subject:{             //nested object
        teacher:'rini'
    }

}

var {
    subject:{
        teacher
    }
}=obj;
console.log(teacher);