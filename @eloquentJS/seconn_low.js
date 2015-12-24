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

var r = [1,2,2,3,24,3,453,5,55,65,,6,57677,7,7,7,878,8].unique();
console.log(r)