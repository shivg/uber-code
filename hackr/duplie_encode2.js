function duplicateEncode(w){
var result=[];
  for (i=0;i<w.length;i++){
    var regOb = new RegExp(w.charAt(i),"gi")
    var x = regOb.exec(w);
  if (regOb.exec(w) !== null){ result.push("(")} else {result.push(")")}

  }
  return result.join("");

}
console.log(duplicateEncode("Success"))
