class car{
   constructor(name,year){
      this.name=name;
      this.year=year;
   }

}

const mycar1=new car("swift",2015);
const mycar2=new car("Rix",2017);

console.log(mycar1.name+" "+mycar1.year);
console.log(mycar2.name+" "+mycar2.year);