//find filter
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
var a=arry.filter((iteam)=>{
    return iteam.mark>=30
})
console.log(a);