function count (string) {
var obJ = {}
for (i=0;i<string.length;i++){
var str = string[i];
  if (obJ[str]) {
    obJ[str] +=1
    } else {
      obJ[str] = 1;
    }
}
return obJ;
}

console.log(count("HackReactor"))
