
function deepEqual(obj1,obj2,pnum){
  if (typeof(obj1)&&typeof(obj2)!=obj) {
    if (obj1===obj2) {
      return true;
    } else return false;
  }
  i=0;c1=0;
  for (var props in obj1){
    c1+=1;
  }
  for (var props in obj2) {

  }

  if (c1!=c2)  {
    return false;

  }
  pnum=c1;
  for (var prop1 in obj1)  {
    for (var prop2 in obj2)  {
      deepEqual(prop1,prop2,pnum-1)
        if (pnum=0)  {return true;}
    }

    if (obj1.prop1!=obj2.prop2) {
      return false;
    }

    return true;
  }


}
//console.log("Hello");

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
