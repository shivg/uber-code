var myObj = {
x: 10,
getX: function(){
console.log(this.x)
}

}
myObj.getX();
var zzz = myObj.getX;
x=20;
zzz();

var yyy = myObj.getX.bind(myObj);
x = 123;
yyy();

//var eee = myObj.x.bind(myObj); won't work
