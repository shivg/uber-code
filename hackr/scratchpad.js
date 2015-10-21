
function  each(collection,callback){
  for (i=0;i<collection.length;i++){
    callback(collection[i]);
  }
}

function reduce(array,combine,startVal){
  var result = startVal == undefined ? array[0] : startVal;
  var array = startVal == undefined ? array.slice(1) : array;
  each(array,function (element){
 //if (startVal == undefined && element == array[0]) {result = 0}
 result = combine(result,element);
});
return result;
}

var arr = [1,2,3,5,1,5,2,100];
var add = function (a,b){
  return a+b;
};

//console.log(reduce(arr,add));
var max = function (a,b,index){
  j = a > b ? index-1 : index
  return a>b ? a : b;
}


function sort(array){
  var l = array.length, sorted = [];
  for (i=0;i<l;i++){
    var m = array.reduce(max);
    sorted.push(m);
    array.splice(array.indexOf(m),1);
  }
  return sorted;
}

console.log(sort(arr));










if (!Array.prototype.reduce) {
  Array.prototype.reduce = function(callback /*, initialValue*/) {
    'use strict';
    if (this == null) {
      throw new TypeError('Array.prototype.reduce called on null or undefined');
    }
    if (typeof callback !== 'function') {
      throw new TypeError(callback + ' is not a function');
    }
    var t = Object(this), len = t.length >>> 0, k = 0, value;
    if (arguments.length == 2) {
      value = arguments[1];
    } else {
      while (k < len && !(k in t)) {
        k++;
      }
      if (k >= len) {
        throw new TypeError('Reduce of empty array with no initial value');
      }
      value = t[k++];
    }
    for (; k < len; k++) {
      if (k in t) {
        value = callback(value, t[k], k, t);
      }
    }
    return value;
  };
}
