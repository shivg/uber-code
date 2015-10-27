
function every(array,callback){
for (var i = 0;i<array.length;i++){
	if (!callback(array[i])) {return false}
};
return true;
}
function some(array,callback){
  var bool = false;
   array.forEach(function (element){
	if (callback(element)) {bool = true}
    }
);
return bool;
}

//console.log(every([NaN, NaN, NaN], isNaN));
// → true
//console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false
var foo = 5;
var output = 'Output: ';
switch (foo) {
  case 10:
    output += 'So ';
  case 1:
    output += 'What ';
    output += 'Is ';
  case 2:
    output += 'Your ';
  case 3:
    output += 'Name';
  case 4:
    output += '?';
    console.log(output);
    break;
  case 5:
    output += '!';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 6!');
}
