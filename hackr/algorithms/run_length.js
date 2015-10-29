function RunLength(str){
  var last = str[0], result = "";
  for (var i =1;i<str.length;i++){
    if (last[0] == str[i]){
      last += str[i]
      //console.log(last)
    } else {
      len = last.length; len = len == 1 ? "" : len;
      result += String(len).concat(last[0]);
      last = str[i]; if (i == str.length-1){result+=str[i]}
    }
  }
  return result;
}

console.log(RunLength("hhaaboohoobaaaabbccseer"))
