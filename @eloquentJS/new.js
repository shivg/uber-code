function countChar(str,letter){
  var count = 0;
for (i=0;i<str.length;i++){
 if (str.charAt(i)== letter){count+=1}
		}
  return count;
	}
//console.log(countBs("BBC"));
// → 2
//console.log(countChar("kakkerlak", "k"));
// → 4

function reverseArray(myArray){
  	var result = [];
    for (i=myArray.length-1;i>=0;i--){
    result.push(myArray[i]);
    }
  return result;
}
function reverseInPlace(arrayValue){
  for (i=0;i<Math.floor(arrayValue.length-1)/2;i++){
    var old = arrayValue[i];
    arrayValue[i]=arrayValue[arrayValue.length-1-i];
    arrayValue[arrayValue.length-1-i] = old;

  }
  return arrayValue;
}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseInPlace(arrayValue);
console.log(arrayValue);

console.log(arrayValue)
