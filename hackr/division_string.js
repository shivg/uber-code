

function DivisionStringified(num1,num2) {

  // code goes here
  var forResult = "";
  var x = 3;
  var result = Math.round(num1 / num2);
  if (result < 1000 && result > -1000) {
    return result+"";
  } else {
    result += "";
    var len = result.length;
    console.log(result)
    for (i=0;i<Math.ceil (len/3);i++){
      forResult += ","+result.substr(len -3,len);
      len -= 3;
    }
  forResult = result.substr(0,result.length%3).concat(forResult)
  }
  //if (forResult.charAt(0) == ","){forResult = forResult.substr(1)}
  return forResult;

}
console.log(DivisionStringified(123456789,1000));
//console.log((5%3))
