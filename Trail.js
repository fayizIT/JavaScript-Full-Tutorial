// document.getElementById("button").onclick = Hello;
// function Hello (arg){
//     console.log(arg);
    
// }

// console.log("Two");

// console.log("Firsteeee");
// const a =[ 44,2,5,6,3]

// a.forEach(function Hello(arg){
//     console.log(arg);
// })

// console.log("Lasteeeee");



// myFunction(10)

// function myFunction (val,){
//     console.log(val);
// }

// const fn = function (value){
//     console.log("");
// }
// fn(44)

// const values =[5,6,6,3,53,63,56,32];

// values.forEach(myFunction)

// const fn = () => ({a:3,b:456,c: 33})

   

// const result =fn()
// console.log(result)


///call by value example

// function one(){
// var a = 100

// two(a)
// console.log("onefunction",a);

// }

// function two (a){
//     a= a +200
//     console.log("functiontwo", a);

// }

// one()

///call by Reference

// function firstFn(){
//     var a ={
//         value:100
//     }
//     SecondFn(a)
//     console.log("firstFn----", a.value);
// }

// function SecondFn (a){
//     a.value= a.value+100;
//     console.log("SecondFn----",a.value);
// }

// firstFn()



obj =[
    {
        name:"one",
        msg:"Hi am one"
    },{
        name:"two",
        msg:"Hi am two"
    },{
        name:"Three",
        msg:"Hi am Three"
    }
];


function Hello(){
    obj.forEach((item)=>{
        const button = document.createElement("button")
        button.innerHTML = item.name
        button.onclick = hai(item.msg)
        document.body.appendChild(button);
    })
}


function hai(arg){
    return function (){
        alert(arg)
    }
}

Hello()






