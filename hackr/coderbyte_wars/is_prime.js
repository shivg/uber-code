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
//console.log("String".valueOf())

function Prime(num) {
if (num <= 1){return false}
  for (i=2;i*i<num;i++){
  if (num % i == 0){return false}
  }
  return true;

}
console.log(Prime(87178291199));

if (0){console.log("hahahah")}
