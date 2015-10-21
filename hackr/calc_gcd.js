function gcd(a,b){
  if(a!==0 && b!==0){
    var x = a;
  a =  a > b ? a % b : a;
  b =  b > x ? b % a : b;
  return gcd(a,b);
} else { return a == 0 ? b : a}
}

console.log(gcd(252,105));


function nonRGCD(a,b){
  while (a!==0 && b!==0) {
    var x = a;
  a =  a > b ? a % b : a;
  b =  b > x ? b % a : b;
}
  return a == 0 ? b : a;
}

console.log(nonRGCD(252,105));
