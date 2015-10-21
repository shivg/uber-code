


  function gfr(cr,age,race,sex) {
    if (race==''){race=1;} else  {race=1.210;}
    if (sex==''){sex=1;} else {sex=0.742}
  calcgfr=(186*(Math.pow(cr,-1.154))*Math.pow(age,-0.203)*race*sex);
  return calcgfr;

  }
//gfr

console.log(gfr(1.1,32,'',"female"))
console.log(Math.sqrt(2)*(Math.sqrt(2)));


console.log(Math.floor(Math.random()*10))
