each = function(collection, iterator) {
    if (Array.isArray(collection)) {
    for (var i=0;i<collection.length;i++){
        //console.log(collection[i]);
      iterator(collection[i],i,collection);
    }
  } else {
      for (var prop in collection){
        iterator(collection[prop],prop,collection);
      }
    }
  };

reduce = function(collection, iterator, accumulator) {
    function keys(obj){
    var result = [];
    for (key in obj){
    obj.hasOwnProperty(key) ? result.push(key) : void 0;
    }
    return result;
    }

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
    console.log(element)
    result = iterator(result,element);
    });
    return result;
    }

var a = [1,2,3];
var o = {a:1,b:2,c:3,d:4}

console.log(reduce(a,add,0));



function add(a,b){
  return a+b;
}


