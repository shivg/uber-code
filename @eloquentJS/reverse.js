var str = "Sharmi"
var reverse="";
var len=str.length;
for (i=len-1;i>=0;i--){
  var x = str.split("");
reverse =  reverse.concat(x[i]);
  //console.log(str.split("")[i])
}
console.log(reverse);
