function capMe(names) {
 var lCase =  names.map(function(name){
  return name.toLowerCase();
  });
 var res =  lCase.map(function(name){
  return name.charAt(0).toUpperCase().concat(name.substr(1))
  });
  return res;
}

console.log(capMe(['KARLY', 'DANIEL', 'KELSEY']));

console.log(Math.round(22/7))
