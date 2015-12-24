function iseven (n) {
  if (n === 1) return false;
  if (n === 0) return true;
  return iseven(n-2);
}

console.log(iseven(101));