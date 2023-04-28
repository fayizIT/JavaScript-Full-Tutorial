//map()

const arry=[
    {
        name:"fayiz",
        mark:30,
        place:"Aluva",
        state:"kerala"
    },
    {
        name:"Rihan",
        mark:50,
        place:"Ekm",
        state:"Anthra"
    },
    {
        name:"Atshad",
        mark:28,
        place:"Thrissur",
        state:"Tamilnadu"
    },
    {
        name:"Nayeem",
        mark:45,
        place:"Hebbal",
        state:"Karnataka"
    },
];

var newarry=arry.map((item) =>{ //create a new array corresponding to entered array
    return item.name==="Rihan";
});
console.log(newarry);