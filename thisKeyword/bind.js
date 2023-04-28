const obj={
  a:'Fayiz',
  b:'Rihan',
  c:'Arshad',
  d:function () {
    console.log(this)
  }
};
obj.d=obj.d.bind(obj)

var a=obj.d
a();