var flatten = function (array){
return array.reduce(function (p,c){
    return p.concat(c);
});
}

var array = [[4,20],[2,10]];

console.log(flatten(array));
