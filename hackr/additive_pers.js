function AdditivePersistence(num) {
  var c =0;
  function checker(n){
    if (n < 10){return c}
    c+=1;
    var tot = 0;
    n=n.toString().split("");
    n.forEach(function (number){
      tot += Number(number);
    });
    return checker(tot);

  }
  return checker(num);

}

console.log(AdditivePersistence(99999))
