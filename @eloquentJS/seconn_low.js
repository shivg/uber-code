function SecondGreatLow(arr) {
 arr.sort(function (a,b){
   return a-b;
 });
 arr = arr.unique();
 if (arr.length == 2){
    return arr[1]+ " "+ arr[0];
 } else {
    return arr[1]+ " " + arr[arr.length-2];
 }
}
Array.prototype.unique = function() {
    return this.reduce(function(accum, current) {
        if (accum.indexOf(current) < 0) {
            accum.push(current);
        }
        return accum;
    }, []);
}

console.log(SecondGreatLow([2, 2,2,42, 42, 180]));
