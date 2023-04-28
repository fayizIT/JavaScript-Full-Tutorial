//using by id
var a=document.getElementById("head");
a.innerHTML="Learn javascript" 





 //using by className
var a=document.getElementsByClassName("head1")
a[0].innerHTML="Good mrng all"
a[1].style.color="green"   


//using by tagname

var a=document.getElementsByTagName("h2");
a[0].style.color="green" 



//using by Name
document.getElementsByName("text")[0].value="Name";
document.getElementsByName("text")[1].value="Phone No"; 

var a=document.getElementsByName("text")[1];
function hello(){
    b.innerHTML=  a.value;

}



//using queryselectorAll &  queryselector(class & id included)

var a=document.querySelectorAll("h1");
a[0].innerHTML="Hello javascript";
a[0].style.color="red"
a[1].innerHTML="Thomas"
a[1].style.color="Green"

var a=document.querySelector("#head");
a.innerHTML="Hello python";
a.style.color="green"

var a=document.querySelector(".head3");
a.innerHTML="css Selector"
a.style.color="red"


var a=document.createElement("h1");
function create(){
    a.innerHTML="Hello world";
    document.body.appendChild(a)

}

function remove(){
    a.remove()
}


















 
