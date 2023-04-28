const ob={
    a:40,
    b:50,
    c:function (a,b){
        console.log(this,a,b);
    }
};

var k=ob.c;
k.call(ob,4,5);  //using call()
k.apply(ob,[4,5]); //using apply()
