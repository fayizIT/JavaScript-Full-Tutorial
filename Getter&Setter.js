class Button{
    constructor(name){
        this.button=document.getElementById('button');
        this.button.innerHTML=name;

        document.body.appendChild(this.button)
    }

    //setter is using for Assigment operator to Functional operator
    set width(width){
        this.button.style.width=width+'px'
    }

    //setter is using for Assigment operator to Functional operator
    set height(height){
        this.button.style.height=height+'px'
    }

    //getter is using for Functional operator to Assigment operator
    get width(){
         return this.button.style.width
    }

    //getter is using for Functional operator to Assigment operator
    get height(){
        return this.button.style.height
   }
}

var b1=new Button('click me')
b1.width=100;   //calling setter
b1.height=150;  //calling setter
console.log(b1.width,b1.height); //calling getter