function isPrime(n){
  if (n <= 1) {return false;}
  else if (n <= 3) {return true;}
  else if (n % 2 == 0 || n % 3 == 0)
        {
          return false;
        }
  var i = 5;
  for (i=5;(i*i <= n);i+=6)
  {
    if (n % i == 0 || n % (i+2) == 0){
      return false;
    }
  }
  return true;
}

console.log(isPrime(87178291199));
console.log("String".valueOf())

function toBinary(n){
 //Be Ready for Large Numbers. Happy Coding ^_^
 var bnum = "",
     quo,
     rem,
     checkN = n;
  if (n < 0) {n = (n*-1)}
 do {
   rem = n % 2;
   n = Math.floor(n / 2)
   bnum = rem + bnum;

 } while (n > 0);
 if (checkN > 0) {
 return bnum ;
 } else {
 var bnum = Number(bnum);
 bnum = ~bnum;
 var bArray = bnum.toString().split(""); var x= 0,result = "";
 for (i =0; i>bArray.length;i++){
 result = 0 + result;
 }
 return Number(result.concat(bnum));
 }
}

console.log((2 >>> 0).toString(2));
//n = -200;
//console.log((n * -1))
function toBinary(n){
 //Be Ready for Large Numbers. Happy Coding ^_^
 return (n >>> 0).toString(2)
}
console.log(toBinary(-3));
