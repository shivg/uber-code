function christmasTree(height) {
 var resA = []
for (i=0;i<height;i++){
    var cnt=1;
    for(j=1;j<cnt;j++){
      resA[i] ? resA[i]=resA[i]+"*" : resA[i] = "*"
    }
    cnt = cnt+2;
  }
  return resA[0];
}
console.log(christmasTree(5))
