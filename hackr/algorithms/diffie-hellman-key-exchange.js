
x = 1522605027922533360535618378132637429718068114961380688657908494580122963258952897654000350692006139;


function diffieH(p,g){
  if (!isPrime) {return console.log("p is not prime")}
var a=0,b = 0;
while (a==0 && b==0){
 a =  Math.floor(Math.random()*20);
 b =  Math.floor(Math.random()*20);
}
var sendA = Math.pow(g,a) % p;
var sendB = Math.pow(g,b) % p;
            
var secretA = Math.floor(Math.pow(sendB,a)  % p);
var secretB = Math.floor(Math.pow(sendA,b) % p);
return console.log("Alice secret is " + secretA + "\nBob secret is   "+secretB)
}
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
diffieH(x,5)

console.log(1 % 23)
