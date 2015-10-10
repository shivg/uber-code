function DashInsert(str) {
 var newStr = str.charAt(0);
 var prev;
  // code goes here
  for (i=1;i<str.length;i++){

         prev = Number(str.charAt(i-1));

     var current = Number(str.charAt(i));
     if (current % 2 !== 0 && prev % 2 !== 0)
      {
      //  console.log("inside if and current is "+current+" and prev is "+prev);
       newStr = newStr.concat("-").concat(current)
      }
     else {
      newStr = newStr.concat("").concat(current)
     }
  }
  return newStr;

}

console.log(DashInsert("2399920422"));
