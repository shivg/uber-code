function fib(n){
  switch(n){
  case(0):
  return 0;
  case(1):
  return 1;
  case(n):
  return fib(n-1)+fib(n-2)
}
}


console.log(fib(10))
