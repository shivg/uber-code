

var data = {shiv : {name: {fn:"siva",ln:"peri"},phone:"9193087138", email:"s@g.com"},
           sharmi : {name: {fn:"shar",ln:"rang"},phone:"9199176791", email:"shar@g.com"}
              }

newObj = {shiv: "9193087138",shar : "9199176791"}


function pBook(data){
  var pb = {};
for (var user in data){
  var fn = data[user]["name"]["fn"]
  pb[fn] = data[user]["phone"];
}
  return pb;
}

console.log(pBook(data));


var array = [1,234,456,100,232,132446,3245]

var res = array.reduce(function (cur,max){
  if (max > cur){return max} else {return cur}
});
console.log(res)
