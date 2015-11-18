 map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.
    var result=[], current;
    var props = Array.isArray(collection) ? void 0 : keys(collection);
    var len = (props || collection).length;
    for (var i=0; i<len; i++){
    	current = props ? props[i] : i;
    	result.push(iterator(collection[current]));
    }
    return result;


    function keys (obj){
    var result = [];;
    for (var prop in obj){
      obj.hasOwnProperty(prop) ? result.push(prop) : void 0
    }
    return result;
  }
  };

  
var a = [1,2,3,4,5,6];
var o = {a : 1,b : 2,c: 3,d: 4,e: 5,f: 6}

console.log(map(a, function (n){
	return n+10;
}))


