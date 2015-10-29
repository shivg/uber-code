function ArithGeo(arr) {

  // code goes here
  var check1,yes1;
  for (i=1;i<arr.length;i++){
    if (i !== 1) {
      if (check1 !== arr[i-1] - arr[i]){
        yes1 = -1;
        break;
      }
    }
    check1 = arr[i-1]- arr[i];
    yes1 = "Arithmetic";
  }
  if (yes1 == "Arithmetic") {
    return yes1
  } else
  yes1=-1;

  var check2,yes2;
  for (i=1;i<arr.length;i++){
  if (i !== 1) {
    if (check2 !== arr[i-1]/arr[i]){
      yes2 = -1;
      break;
    }
  }
  check2 = arr[i-1]/arr[i] ;
  yes2 = "Geometric"
}
    return yes2;
}
console.log(ArithGeo([2, 6, 18, 54]));
// keep this function call here
// to see how to enter arguments in JavaScript scroll down
//ArithGeo(readline());
