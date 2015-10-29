function ThirdGreatest(strArray) {

var maxCount = 0,
    len = strArray.length,
    foundW = "";
  for (i=0;i<len;i++){
     if (strArray[i].length >= maxCount){
         maxCount = strArray[i].length;
         foundW = strArray[i];
     }
  }
return foundW;

}
