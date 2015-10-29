var obj = {one : 10, two : 2, rest : 3, hehe: 4, "hahaha": " finally"}
var arr = [1,2,3,100];


function reduce1(array,combine,startVal){
  if (!Array.isArray(array)) { var props = keys(array) }
 props = props || [0];
  var result = startVal == undefined ? array[props[0]] : startVal;
  if (Array.isArray(array)) {
    startVal == undefined ? array.splice(0,1) : void 0;
  } else startVal == undefined ? delete array[props[0]] : void 0;

  each(array,function (element){
 result = combine(result,element);
});
return result;
}

//sharmi **
function reduce(array,combine,startVal){
  var result;
  if (!Array.isArray(array)) {
    var props = keys(array);
     startVal == undefined ? (result = array[props[0]] , delete array[props[0]]) : result=startVal;
  }else{
     startVal == undefined ? (result = array[0], array.splice(0,1)) : result =startVal;
  }
  each(array,function (element){
  result = combine(result,element);
});
return result;
}

var add = function (a,b){
  return a+b;
};

console.log(reduce(arr,add));






var max = function (a,b,index){
  return a>b ? a : b;
}


function sort(array){
  var l = array.length, sorted = [];
  for (var i=0;i<l;i++){
    var m = array.reduce(max);
    sorted.push(m);
    array.splice(array.indexOf(m),1);
  }
  return sorted;
}

console.log(sort(arr));







function keys(obj){
  var result = [];
  for (var key in obj){
     obj.hasOwnProperty(key) ? result.push(key) : void 0;
  }
  return result;
}

//each(obj,function (element){console.log(element)});

function each(collection,callback){
  if (Array.isArray(collection)) {
    for (var i=0;i<collection.length;i++){
      callback(collection[i]);
    }
  } else {
    var props = keys(collection);
    for (var j = 0;j<props.length;j++){
      callback(collection[props[j]]);
    }
  }
 return collection;
}
