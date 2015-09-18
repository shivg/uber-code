s = 'string like this'
// Show two ways to turn it into 'String Like This'

var result = s.split(" ").map(function caps(string){
  var x = string.split("");
  x[0] = x[0].toUpperCase();
  return x.join("");
}).join(" ");


console.log(result)
