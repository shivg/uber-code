function fib2(n){
  if (n == 0) return 0;
  var fibA = [0,1];
  for (i=2;i<n;i++){
    fibA[i] = fibA[i-1]+ fibA[i-2];
  }
  return fibA[fibA.length-1];
}


console.log(fib2(1477))
