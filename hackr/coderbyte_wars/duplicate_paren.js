function duplicateEncode(w){
   w= w.toLowerCase();
    var res = [];
  var arrW = w.split("");
  var i;
  for (i=0;i<arrW.length;i++){
    var x = w.split("");
    var remLetter = x.splice(i,1);
    if (x.indexOf(remLetter[0]) !== -1) {res.push(")")} else {res.push("(")}
  }

    return res.join("");
}

console.log(duplicateEncode("Success"))



//console.log(duplicateEncode("Succ)))(((ess"));
