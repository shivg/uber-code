
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
