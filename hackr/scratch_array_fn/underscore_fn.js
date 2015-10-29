

function findV(array,value){
//  var array = array.reverse();
var c = 0 , flag = false;
  each(array, function (n){
    n != value && !flag ? c ++ : flag = true;
});
  c == array.length ? c = -1 : void 0;
  return c;
}


var x =[1,3,5,657,78,4,47,7575,85,868];

//console.log(find(x,1))

function each(collection,callback){
  if (Array.isArray(collection)) {
    for (var i=0;i<collection.length;i++){
      callback(collection[i],i);
    }
  } else {
    var props = keys(collection);
    for (var j = 0;j<props.length;j++){
      callback(collection[props[j]],j);
    }
  }
 return collection;
}

function keys(obj){
  var result = [];
  for (var key in obj){
     obj.hasOwnProperty(key) ? result.push(key) : void 0;
  }
  return result;
}

function reducer(obj, accumulator, initial) {
   var keys = !Array.isArray(obj) && getKeys(obj),
       length = (keys || obj).length,
       index = 0;
   if (!initial) {
     var result = obj[keys ? keys[index] : index];
     index ++;
   } else result = initial;

   for (; index >= 0 && index < length; index ++) {
     var currentKey = keys ? keys[index] : index;
     result = accumulator(result, obj[currentKey], currentKey, obj);
   }
   return result;
 };


 function values (obj){
   var val = [];
   for (key in obj){
     obj.hasOwnProperty(key) ? val.push(obj[key]) : void 0
   }
   return val;
 }

 var obj = {one : 10, two : 2, rest : 3, hehe: 4, "hahaha": " finally"}

//console.log(values(obj)) ;

function find(array, predicate){
  var index = findIndex(array,predicate);
  return index != -1 ? array[index] : index;
}

function findIndex(array,test){
  for (var i=0;i<array.length;i++){
    if (test(array[i])) return i;
  }
  return -1
}

var isDivSix = function (num){
  return num % 5 == 0 ;
}
var t =[1,3,657,[142,4,[1,4,["this tooooo?","2424"],3,"hahahhhhH"],3535],78,4,47,7575,85,868];

console.log(find(t,isDivSix));

function flatten(array){
  var result = [];
  function flat(obj){
    if (Array.isArray(obj)){
      for (var i = 0;i<obj.length;i++){
        if (Array.isArray(obj[i])) flat(obj[i])
        else result.push(obj[i]);
      }
  } else result.push(obj)
}
  flat(array);
  return result;

}

console.log(flatten(t))
