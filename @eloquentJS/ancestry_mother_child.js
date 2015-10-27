var ancestry = require('/Users/shivg/Dropbox/Develop/repos/eloquent-js/@eloquentJS/ancestry.js')
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var ancestry = JSON.parse(ancestry);
//console.log(ancestry[10]);
var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});
//console.log(byName)
var i =0;
var diffArray = ancestry.filter(function (person){
 return byName[person.mother];
}).map(function (person){
  return person.born - byName[person.mother].born;
});
console.log(average(diffArray));



function bName(ancestry){
  byName = {}
ancestry.forEach(function (person){
	byName[person.name] = person;
});
  return byName
}

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}
var result = {};
ancestry.forEach(function (person){
var cent = Math.ceil(person.died/100);
  if (result[cent]) {result[cent].push(person.died-person.born)}
  else result[cent] = [person.died-person.born]
});
for (cent in result){
result[cent] = average(result[cent]);
}
console.log(result);
// Your code here.

// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94
