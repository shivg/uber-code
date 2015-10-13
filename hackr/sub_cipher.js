function SubstitutionCipher(abc1, abc2) {
  this.encode = function (str) {
    var result = [];
    for (i=0;i<str.length;i++){
   var enc = abc2[abc1.indexOf(str[i])] || str[i]
    result.push(enc);

    }
    return String(result.join(""))
  }
  this.decode = function (str) {
    var result = [];
    for (i=0;i<str.length;i++){
 var dec = abc1[abc2.indexOf(str[i])] || str[i]
    result.push(dec);

  }
  return String(result.join(""))
}
}

var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode("shi___?va")); // ==> "eta"
console.log(sub.encode("xyz"))// => "qxz"
console.log(sub.encode("aeiou")) // => "eirfg"

console.log(sub.decode("eta")) // => "abc"
console.log(sub.decode("qxz")) // => "xyz"
console.log(sub.decode("eirfg")) // => "aeiou"





var myFun = function (fn,n1,n2){
		return fn(n1,n2);
}
var multi = function (n1,n2){
	return n1*n2;
}
console.log(myFun(multi,2,10));


var person = {firstname: "Shiva",
              lastname: "Periyasamy",
              birth: "11/28/1982",
              getAge: function (){
              var myDate = new Date();
              var year = this.birth.match(/\d+$/)[0]
              var age = myDate.getFullYear() - Number(year)
              return age;
            }
          };

  console.log(person.getAge())

var check = function (prev,n){
  if (n % 3 == 0 || n % 5 == 0){
    return (n+prev)
  } else {return prev}
}
  var sum = range(1,1000).reduce(function (p,n){ return check(p,n)}, 0);
  console.log(sum);

  function range(f,l,interval){
    res = [];
    interval = interval || 1
    for (i=f;i<l;i+=interval){
      res.push(Number(i))}
    return res;
  }
  console.log(range(1,5));
