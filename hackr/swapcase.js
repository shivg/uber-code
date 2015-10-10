function SwapCase(str) {
 var newStr = "";
  for (i=0;i<str.length;i++){
    var current = str.charAt(i)
      if (current.match(/[A-Z]/)){
      newStr = newStr.concat(current.toLowerCase());
      } else if (current.match(/[a-z]/)) {
      newStr = newStr.concat(current.toUpperCase());
      } else newStr = newStr.concat(current)
  }
  // code goes here

  return newStr;

}
   console.log(SwapCase("Hello  World?? !!  HELLO"))
