function mergesort (array) {
  var l = array.length
  if (l === 1 || l === 0) return array;
  var len = parseInt(l/2);
  var left = mergesort(array.slice(0,len));
  var right = mergesort(array.slice(len));

  return merge(left, right);
}

function merge (left, right) {
  var result = [];

  while (left.length && right.length) {   
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
 }
  return result.concat(left).concat(right);
}
var array = [11,2,24,1,7,1];
console.log(mergesort(array));