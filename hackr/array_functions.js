

var map = function (collection,callback){
  var result = [];
  forEach(collection,function (element){
    result.push(callback(element));
  });
  return result;
}



var forEach = function (collection,callback){
  if (Array.isArray(collection)) {
    for (i=0;i<collection.length;i++){
      callback(collection[i]);
    }
  } else {
      for (var prop in collection){
        callback(collection[prop]);
      }
    }
  }

  var array = {a:1,b:2,c:3,d:4,e:5}
  console.log(map(array,function (element){
     return element+10;
  }));

  var filter = function (collection,checkbool){
    var result = [];
    forEach(collection,function (element){
      if (checkbool(element)) {result.push(element)}
    });
    return result;
  }

  var filResult = filter(array,function (element){
    return element > 3;
  });
  console.log(filResult);


  var reduce =  function (collection,combine, startVal){
    var result = startVal;
    forEach(collection,function (element){
      result = combine(result, element);
    });

    return result;
  }


  var reduceFor =  function (collection,combine, startVal){
    var result = startVal;
    for (i=0;i<collection.length;i++){
      result = combine(result,collection[i]);
    }
  return result;
}


  var array = [1,2,3,4,5,6]
  console.log(reduceFor(array,function (a,b){
    return a+b;
  },0));

  var reject = function (collection,callback){
    var result = [];
    forEach(collection, function(element){
      if (!callback(element)) {
        result.push(element);
      }
    });
    return result;
  }
var array = [1,2,3,4,5,6]

var ans = reject(array,function (element){
  return element > 3;
});
console.log(ans);
