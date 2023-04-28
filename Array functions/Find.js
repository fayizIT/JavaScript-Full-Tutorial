//find
var arry=[
    {
        name: "fayiz",
        mark: 35,
        place: "Aluva"
    },
    {
        name: "Arshad",
        mark: 30,
        place: "Malapuram"
    },
    {
        name: "Thomas",
        mark: 25,
        place: "Kottayam"
    },
    {
        name: "Rihan",
        mark: 19,
        place: "Ernankulam"
    }  
]
var f=arry.find((item)=>{
    return item.mark<=30;
})
console.log(f)