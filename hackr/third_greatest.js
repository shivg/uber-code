function ThirdGreatest(strArray) {

var len = strArray.length,
    myObj = {1 : 0, 2 : 0, 3 : 0, F : "", S : "", T : ""};
  for (i=0;i<len;i++){
    var curLen = strArray[i].length;
    var elem = strArray[i];
    if (curLen >= myObj["1"]) {
       myObj["T"] = myObj["S"];
       myObj["S"] = myObj["F"];
       myObj["F"] = String(elem);
       myObj["1"] = curLen;
    } else if (curLen >= myObj["2"]){
       myObj["T"] = myObj["S"];
       myObj["S"] = String(elem);
       myObj["2"] = curLen;
    }  else if (curLen >= myObj["3"]){
       myObj["T"] = String(elem);
       myObj["3"] = curLen;
    }
  }
 // function asc (a,b){
 // return a-b;
 // }
 //var sortedA = Array.prototype.sort(asc).apply(myObj);
var util = require('util');
var x = util.inspect(myObj);
console.log(x);
return myObj["T"];

}

function ThirdGreatest(strArr) {
  strArr.sort(function(a,b){
    return b.length - a.length;
  });
  console.log(strArr.toString());
  return strArr[2];
}

console.log(ThirdGreatest(["one","two","three","fiver","sixers","tester"]))
console.log(ThirdGreatest(["hello", "world", "after", "all"]))
