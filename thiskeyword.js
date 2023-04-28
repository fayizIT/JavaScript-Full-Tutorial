
//using this in object
const myobj={
    a:4,
    b:6,
    c:function(){
        console.log(this); //context is call in this
    }
};
myobj.c();
console.log(myobj);



//if we add a keyword in object
const myob={
    a:4,
    b:6,
    c:()=>{                //we can also using arrow()
        console.log(this); //context is written in this
    }
};

var aa=myob.c
aa();

//other type
const myobje={
    a:4,
    b:6,
    c:function(){
        console.log(this); //context is call in this
    }
}

const yourobj={
    k:4,
    j:7,
}

var a=myobje.c;
a();
a.call(myobje)
a.call(yourobj)

