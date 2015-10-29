function OffLineMinimum(strArr) {
 var subset=[];c = 0; final = [];
  do {
  var subset = [] ;
  for (i=0;i<strArr.length;i++){

  if (strArr[i] !== "E") {subset.push(i) } else {c = i; break};
  }

  var smallest = subset.length == 1 ? subset : subset.sort(function(a,b){return a-b});
  final.push(smallest[0]);
  var strArr = strArr.slice(c+1)
  if (strArr[0] == "E"){final.push(smallest[1])}
} while (strArr.length !== 0)
  return final;

}
console.log(OffLineMinimum(["1","2","E","E","3"]));

console.log(Math.pow(2,16));
