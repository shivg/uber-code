function bsearch (array, n) {
  if (array.length === 0) return false;
  var a = Math.floor(array.length/2);
  if (array[a] === n) {
      return n;
    } 
    return array[a] > n ? bsearch(array.slice(0,a), n) : bsearch(array.slice(a+1), n);
}

console.log(bsearch([1,2,3,4,6,7,8] ,3));

