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


  function isEven(n){
  	return n % 2 === 0;
  }

  var a = [3,5]

  // console.log(some(a,isEven));

   // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  zip = function() {
    var result = Array();
    var maxLength = _.reduce(arguments,function(max,cur){
	return cur.length > max	  ? cur.length : max
    },0);
    for (var n=0;n<maxLength;n++){
    	result.push(Array());
    	for (var m=0;m<arguments.length;m++){
    		result[n].push(arguments[m][n])
    	}
    }
  return result;
  };
console.log(zip(['a','b','c','d'], [1,2,3],[1,2131,31,32]))



// var lengthOf = Array();
//     for (var i=0;i<arraysNum;i++){
//     	lengthOf.push(arguments[i].length);
//     };
//     var maxLength = Math.max(...lengthOf);

// console.log("n is "+n+" and m is "+m)
//     		var tmp = args[n][m] || void 0
//     		result[n][m] = args[n][m];console.log(result)






