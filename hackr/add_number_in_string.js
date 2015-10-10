function NumberAddition(str) {
var strArray = str.match(/(\d+)/g);

//  var numArray = strArray.filter(function (element){
  //  if (element.match(/[0-9]/ig)) {return true} else {return false}
//  });
  var total = strArray.reduce(function(a,b){
  return Number(a)+Number(b);
  });
  return total;

}
//myStr = "88Hello 3World! 55Hello";
//var fA = str.match(/(\d+)/g);
//console.log(fA.toString())

console.log(NumberAddition("T1wo Ho33uses"));
