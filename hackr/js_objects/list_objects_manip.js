var arrV = [10,20,30,50,60];

function arrayToList(arrV){
  var list = null;
  for (i=arrV.length-1;i>=0;i--){
    list = {value : arrV[i], rest : list}
  }
  return list;
}

console.log(arrayToList(arrV));
var testList = (arrayToList(arrV));


function listToArray(list){
  array = [];i=0;
  for (node = list;node;node = node.rest){
        array.push(node.value);
  }
return array;
}
//console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(val,list){
   return {value : val ,
           rest: list};
}
//console.log(prepend(10, prepend(20, null)));

function nth(list,n){
  var i = 0;
  for (node = list;node;node = node.rest){
    if (n-1==i){return node.value} else {i++}
  }
}
console.log(nth(testList,5));
