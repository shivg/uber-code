var fact = 52;

var fArray  = [];var n = 0
for (i=1;i<=fact;i++){
  fArray[n] = i;n+=1;
}

var result = 1;
for (i=0;i<fArray.length;i++){
  result = result * fArray[i];
};
console.log(result);

function facR(num){
  if (num == 1) {return num }
  else return num * facR(num-1)
}

console.log(facR(52))
