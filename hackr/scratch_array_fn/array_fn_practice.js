


function reduceFor (collection,combine,startVal){
    var result,index = 0;
    result = startVal || collection[0];
    startVal == undefined ? index = 1 : void 0;

    for (;index<collection.length;index++ ){
    result = combine(result,collection[index]);
    }
    return result;
}


var reduceEach = function (collection,combine,startVal){

    var result = startVal || collection[0]
    collection = startVal == undefined ? collection.slice(1) : collection;
    each(collection, function(element){
    result = combine(result,element)
    })
    return result;
}



/**var reduceAll =  function (coll,accum,startVal){
    var result;
    if (Array.isArray(coll)){
    result = startVal || coll[0]
    startVal == undefined ? coll = coll.slice(1) : void 0;
    } else {
    props = keys(coll);
    result = startVal || coll[props[0]];
    startVal == undefined ? delete coll[props[0]] : void 0;
    }
    each(coll, function (element){
    result = accum(result,element);
    });
    return result;
} **/

var reduceAll =  function (coll,accum,startVal){
    function keys(obj){
    var result = [];
    for (prop in obj){
    obj.hasOwnProperty(prop) ? result.push(prop) : void 0;
    }
    return result;
    }
    var result, i=0, props;
    if (Array.isArray(coll)){
    result = startVal || coll[0]
    } else {
    props = keys(coll)
    result = startVal || coll[props[0]];
    }
    startVal == undefined ? i=1 : void 0;

    each(coll, function (element){
    if (i !==0) {i=0 ; return}
    result = accum(result,element);
    });
    return result;
    }


function keys(obj){
    var result = [];
    for (prop in obj){
    obj.hasOwnProperty(prop) ? result.push(prop) : void 0;
    }
    return result;
}

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

function add(a,b){
  return a+b;
}

var a = [1,2,3,4,5];
var o = {a:1,b:2,c:3,d:4}

console.log(reduceAll(a,add));
