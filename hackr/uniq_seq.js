var uniqueInOrder=function(iterable){
if (typeof iterable == "string"){
  iterable = iterable.split("")
 }

 return iterable.reduce(function(p,c){
 if (p[p.length-1] !== c) { p.push(c); return p} else {return p}
 },[iterable[0]]);
}
var x = "aABBCCDDFFAADD"
console.log(uniqueInOrder(x));
