function PrimeMover(num) {
var count = 0, primeN = 0;
while (count < num){
  if (isPrime(primeN)){count +=1}
  primeN+=1;
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
return primeN-1

}

console.log(PrimeMover(100))
