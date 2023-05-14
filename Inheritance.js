class Sample{
    sampleHello(){
        console.log("this is sample hello");
    }
}



class Hello extends Sample{
    constructor(n1,n2){
        super();
        this.n1=n1;
        this.n2=n2;
    }
    hello(){
        console.log("hello friends",this.n1+this.n2)
    }
}

let hi=new Hello(2,4);
hi.hello();
hi.sampleHello();