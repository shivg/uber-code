function LetterCountI(str) {

  // code goes here
  var myArray = str.split(" ");
  var ret = [];
  for (i=0;i<myArray.length;i++){
   var word =  myArray[i];
   var  splArray = word.split("");
   var fMax,location;
   for (j=0;j<splArray.length;j++){
      var count = 0;
      var countArray = [];
      for (h=0;h<splArray.length;h++){
        if (splArray[j] == splArray[h]){
          count+=1;
        }
       countArray.push(count);
       var sortArray = countArray;
       sortArray.sort(function (a,b){return a-b});
       var fMax = sortArray[sortArray.length-1] ;
       location = countArray.indexOf(fMax);
      }
      ret.push([fMax,location]);
   }
   var nArray= [];
   for (x=0;x<myArray.length;x++){
     nArray.push(ret[x][0]);
   }
    nArray.reduce(function (first,sec,index){
    if (first < sec){
    found = sec;
    } else {found = first;}
    return found;
    });
    var loc = nArray.indexOf(found);
}
  return myArray[loc];
}
console.log(LetterCountI("Hello apple pie"))
