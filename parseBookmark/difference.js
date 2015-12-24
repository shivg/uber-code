every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.
    iterator = iterator || _.identity;
    return reduce(collection, function (p,n){
      return !!iterator(n) && p;
    }, true)
  };

some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.
    iterator = iterator || _.identity;
    return !(every(collection, function (element){
    	return !iterator(element);
    }));
  };


function reduce(collection, iterator, accumulator) {
    function keys(obj){
    var result = [];
    for (var key in obj){
      obj.hasOwnProperty(key) ? result.push(key) : void 0;
    }
    return result;
    };

    var result, i=0, props;
    if (Array.isArray(collection)){
    result = accumulator == undefined ? collection[0] : accumulator;
    } else {
    props = keys(collection)
    result = accumulator == undefined ? collection[props[0]] : accumulator;
    }
    accumulator == undefined ? i=1 : void 0;

    each(collection, function (element){
    if (i !==0) {i=0 ; return}
    result = iterator(result,element);
    });
    return result;
    }

 function each(collection, iterator) {
     if (Array.isArray(collection)) {
     for (var i=0;i<collection.length;i++){
       iterator(collection[i],i,collection);
     }
   } else {
       for (var prop in collection){
         iterator(collection[prop],prop,collection);
       }
     }
   };

difference = function(array) {
	var args = Array.prototype.slice.call(arguments,1);
	var result = array.slice();
	args.forEach(function(nextArray){
		for (var i=0;i<result.length;i++){
	  	  if (some(nextArray, function (element){
            return element == result[i];
            })) {
	  	  	  result.splice(i,1);
	  	  	  i--;
	  	    }
	    }
	});
    return result;
  };

 var a=[1,2,3,4,5],b = [1,3], c=[5];

 // console.log(difference(a,b,c));

throttle = function(func, wait) {
  var hasRun=false, ranAt, result
  return function(){
    if (!hasRun){
      hasRun=true;
      ranAt=Date.now();
      result = func.apply(this, arguments);
      return result;
    } else {
      var timeDiff = Date.now() - ranAt;
      if (timeDiff > wait){
        result = func.apply(this, arguments);
        ranAt = Date.now();
      } else {
        return result;
      }
    }
  }
  };

  var counter = 0;
var increment = function() {
  return (counter += 1);
};

// Create a function called throttledIncrement. This function can be called at
// most once every 100ms
var throttledIncrement = throttle(increment, 100);

console.log(throttledIncrement()) // return 1; `counter` should now be 1
console.log(throttledIncrement()) // return 1; schedule `increment()` call in 100ms
console.log(throttledIncrement()) // return 1; should do nothing
