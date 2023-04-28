//destructing using object
const obj1={
    Name:"fayiz",
    place:"kerala",
    Pincode:683112

};


function myfunction(){

 const {
        Name,
        place,
        Pincode
    }=obj1;

    console.log(Name,place,Pincode);

}
myfunction();


//destructring using  rest operator
const object1={
    Name:"fayiz",
    place:"kerala",
    Pincode:683112

};
function myfunction(){

 const {
        Name,...rest
    }=object1;

    console.log(Name,rest);

}
myfunction();

