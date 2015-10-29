var str = 'never odd or even'
function reverse (str){

  var x = str.split('').reverse().join('');
  return (x === str);
}


console.log(reverse(str));

function rev(str){
  var result = [];
  for (i=str.length-1;i>=0;i--){
    result.push(str.split('')[i]);
  }
return (str === result.join(''));
}
console.log(rev(str));

function charRev(str){
  var r = [];var j = 0
  for (j=0,i=str.length-1;i>=0;i--, j++){
    r[j] = str.charAt(i);
  }
  return (str === r.join(''));
}
console.log(charRev(str));
