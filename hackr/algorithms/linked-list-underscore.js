function Cons(head,tail){
    this.head = head;
    this.tail = tail;
}

var numbers  = new Cons(1, new Cons(2, new Cons(3, new Cons(4, new Cons(5, null)))));

function toArray(list) {
    if(list){
        var more = list.tail;
        return [list.head].concat(more? toArray(more) : []);
    }
    return [];
}

Cons.prototype.toArray = function(){ return toArray(this); };



var fromArray = function(array){
var list = new Cons(array[array.length-1], null);
  for (var i=array.length-2; i>=0; i--) {
    var node = new Cons(array[i] , list);
    list = node;
  }
	return list;
};

function filter(list, predicate){
var result = [];
  for ( ; list; list=list.tail) {
    var value = list.head;
  if (predicate(value)) {
  result.push(value);
    }
  }
  var list = new Cons(result[result.length-1], null);
    for (var i=result.length-2; i>=0; i--) {
      var node = new Cons(result[i] , list);
      list = node;
    }
  	return list;
}


function map(list, mapper){
var result = [];
  for(var node = list; node; node=node.tail){
    result.push(mapper(node.head));
  }
  var list = new Cons(result[result.length-1], null);
  if (result.length === 1) return list;
    for (var i=result.length-2; i>=0; i--) {
      var node = new Cons(result[i] , list);
      list = node;
    }
    return list;
}
Cons.prototype.filter = function(predicate){ return filter(this,predicate); };
Cons.prototype.map = function(mapper){ return map(this, mapper); };
Cons.prototype.toArray = function(){ return toArray(this); };

console.log(fromArray([23,2,24,3,5,35]));
console.log(filter(numbers, function(e){
	return e % 2 !== 0;
}));
console.log(map(numbers, function (e) {
  return e+100;
}));
