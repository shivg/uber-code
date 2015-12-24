function exponent (b, e) {
	if (e === 1) return b;
  var result = exponent(b, e-1);
  result = result * b;
  return result;
}

console.log(exponent(8,2))