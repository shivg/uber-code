// Your code here.


function arrayToList(myarr) {
  list=null;len=myarr.length;x={};
  for (i=(len-1);i>-1;i--){
	 x=myarr[i] ;
    list={value: x,rest:list};
}
  return list
}

function listToArray(list) {
	myarr=[];
  for (node=list;node;node=node.rest){
  myarr.push(node.value);
    }
  return myarr;
}


function prepend(x,list){
  newlist={};
  newlist={value:x,rest:list};
  return newlist;

}
function nth(list,n){
    x=1;
  for (node=list;node;node=node.rest){
    if (x==n){foundv=node.value;return foundv;break;}
  	x+=1;
  }
}


function tenth(list,n) {
  x=1;
  return(renth(list,n,x));
  function renth(list,n,x){
  	if (n==x)
    {
      foundv=list.value;
      return foundv;
    }
    if (list.rest==null) {
    return undefined;
    }
    list=list.rest;
    renth(list,n,x+1);
  }
}









console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, {value: 20, rest: prepend(20, {value: 20, rest: null})})));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 5));
// → 20
