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
