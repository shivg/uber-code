function LetterCountI(str) {
  var strArray = str.split(" "),
      wordmax = 0,
      wMax = ""
  for (i=0;i<strArray.length;i++){
    var max = 0;
    var wSplit = strArray[i].split("");
    for (j=0;j<wSplit.length;j++){
      var count =strArray[i].match(new RegExp(wSplit[j], "ig"));
      if (count.length > max){
        max = count.length;
      }
    }
    if (max > wordmax){
      wordmax = max;
      wMax = strArray[i];
    }
  }
 return wMax;
}
console.log(LetterCountI("Hello appple pieeee"))
