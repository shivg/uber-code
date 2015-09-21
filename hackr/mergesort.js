function mergeSort(arr) {

if (arr.length <2){return arr}
console.log("arr val "+arr);
var middle = parseInt(arr.length / 2);
var left = arr.slice(0, middle);
var right = arr.slice(middle, arr.length);


return merge (mergeSort(left),mergeSort(right));
}

function merge(left,right){
 console.log("inside merge left and right "+left+" "+right);
  var result = [];
  while(left.length && right.length){
    if (left[0] <= right[0]){
      result.push(left.shift());
    } else {result.push(right[0]);
            right.shift();
          }
  }
  while(left.length){
    result.push(left.shift());
  }
  while(right.length){
    result.push(right.shift());
  }
  //console.log(result.toString());
return result;

}

console.log(mergeSort([2,6,8,45,67,2,4,46,78,43,12]));
