function LetterChanges(str) {
  var word="";var w="";
  for (i=0;i<str.length;i++){
  if (/[A-Ya-y]/.test(str[i])){
   w = String.fromCharCode(str[i].charCodeAt() + 1);
    if (/[aeiou]/.test(w)){
    w = w.toUpperCase()
    }
    word+=w;
  } else  if (/[zZ]/.test(str[i])){
    word+="A";
  }
  else {
      word+=str[i];
    }
  }
  console.log(word);
  return word;

}


// keep this function call here
// to see how to enter arguments in JavaScript scroll down
LetterChanges("HHaHa Sharmi^@1!!!");
