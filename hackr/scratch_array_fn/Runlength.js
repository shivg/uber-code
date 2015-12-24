function RunLength(str) {

  var result = [];var last = [str[0]]
  for (var i=1;i<str.length;i++){
    if (last.length == 0){last.push(str[i])}
    else if (last[last.length] == str[i]) {
      last.push(str[i])
    }
    else if (!last[last.length] == str[i])
  {
    result.concat(last);
  }


}
  return result.join("");
}

console.log(RunLength("aabbcde"))
