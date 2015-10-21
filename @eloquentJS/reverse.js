var str = "Sharmi"
var reverse="";
var len=str.length;
for (i=len-1;i>=0;i--){
  var x = str.split("");
reverse =  reverse.concat(x[i]);
  //console.log(str.split("")[i])
}
console.log(reverse);
var rev = "";
for (i=len-1;i>=0;i--){
rev += (str.substr(i,1));
}
console.log(rev);

function revStr(str){
return   str.split("").reverse().join("");
}
console.log(revStr("Shiva"));

function revS(str){
  var res = [];
  str.split("").forEach(function (char){
  res.unshift(char);
});
  return res.join("");
}

console.log(revS("Sharmila"));
console.log(Function.prototype.toString === String.prototype.toString)


function average(array){
return array.reduce(function (p,n){
	return p+n;
	}) / array.length
};
function powerset(ary) {
    var ps = [[]];
    for (var i=0; i < ary.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(ary[i]));
        }
    }
    return ps;
}

var res = powerset([1,2,3,4]);
console.log(res)
