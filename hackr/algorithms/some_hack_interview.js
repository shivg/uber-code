var some = function (array, predicate){
  return reduce(array, function (p,n){
    return p || predicate(n);
  }, false);
};
