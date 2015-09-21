function ExOh(str) {
 x = str.match(/x/).length;var y = 0
 if (/o/.test(str)) { str.match(/o/).length;}
  if (x=y) {console.log(true)} else {console.log (false)}

}

ExOh("x");
var str = "xooxooxx"
console.log(str.split(/x/i).length === str.split(/o/i).length) ;
console.log(str.split(/x/i).length)
