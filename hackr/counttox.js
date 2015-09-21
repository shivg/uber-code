function SimpleAdding(num) {
  console.log ((num * (num+1))/2);

}
SimpleAdding(2);


function VowelCount(str) {
var count = 0;
  str.split("").map(function count(letter){
  if (/[a,e,i,o,u]/.test(letter)) {count += 1}
  })
  return count;

}
