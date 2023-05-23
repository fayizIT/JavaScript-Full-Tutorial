class Button{
    constructor(name){
        this.button=document.getElementById('button');
        this.button=innerHTML =name;

        document.body.appendChild(this.button)
    }

    width(width){
        this.button.style.width=width='px'
    }

    height(height){
        this.button.style.height=height='px'
    }
}

var b1=new Button('click me')
b1.width=100;
b1.height=100
console.log(b1);