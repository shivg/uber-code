function check(test) {
 var one = 0;
 return function (fn){ return function(x) {if (one == 0){one+=1;return fn(x)} else if (one>0) {return undefined}}
 }
}
function once(fn) {
 var call = true;
  return function() {
    if (call){
      call=false;
      return fn(arguments["length"]);
    } else {
      return undefined;
    }
 }
}
//var once = check();

var mycon = once(console.log);

mycon("hello","creeture","this","array like obj");

mycon("hello222");
/*

function once(fn) {
  var call = true
  return function() {
    if (call) {
      call = false
      return fn(arguments)
    }
  }
}
*/
