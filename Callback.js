function myfunction(parm){
    console.log("hello world",parm);
}

const values=  [2,3,4,5,6,7];
values.forEach(myfunction);

//other way


const value=  [2,3,4,5,6,7];
value.forEach(function myfunction(parm){
    console.log("hello world",parm);
});
