var fact = 10;

var fArray  = [];var n = 0
for (i=1;i<=fact;i++){
  fArray[n] = i;n+=1;
}

var result = 1;
for (i=0;i<fArray.length;i++){
  result = result * fArray[i];
};
console.log(result);
function x(y){var c=y;return c;}
console.log(x(2));
