// function add(a,b){
//     function myadd(){
//         const c = a + b;
//         return c;

//     }
    
//     return myadd;
// }

// function main(){
//     const res =add(6,7);
//     const val=res();
//     console.log (val);

// }
// main();

var obj =[
    {
        name:"one",
        msg:"Hello am fayiz"
    },
    {
        name:"Two",
        msg:"Hello am Rihan"
    },
    {
        name:"Three",
        msg:"Hello am Arshad"
    },
    {
        name:"Four",
        msg:"Hello am Nayeem"
    },
];

function main(){
    obj.forEach((item)=>{
        const bt= document.createElement("Button");
        bt.innerHTML=item.name;
        bt.onclick=getcallback(item.msg);
        document.body.appendChild(bt);
    
    });

    }
    function getcallback(arg){
        return function mycallback(){
        alert(arg)

    }


   

}
main();
