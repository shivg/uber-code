function fibo (n) {
  if (n === 2) return [0,1];
  var result = fibo(--n);
  var len = result.length-1
  result.push(result[len]+result[len-1]);
  return result;
}

console.log(fibo(10000));