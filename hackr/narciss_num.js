function narcissistic( value ) {
  function getLen (n){
  return n.toString().length
  }
  var len = getLen(value);var tot = 0;
  var myArray = value.toString().split("")
  myArray.map(function(cur){
  tot = tot + Math.pow(Number(cur),len)
  })
  if (value == tot){return true} else {return false;}
}

console.log(narcissistic(153))

console.log(typeof "Str" == "string")
