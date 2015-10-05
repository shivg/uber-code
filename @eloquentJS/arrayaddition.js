function ArrayAdditionI(arr) {

  var found,loc;
  arr.reduce(function (first,sec,index){
  if (first < sec){
  found = sec;
} else {found = first;}
return found;
  });

  arr.splice(arr.indexOf(found),1);
 var myArrays = subset(arr,2);
 for (i=0;i<myArrays.length;i++){
   var result = 0;
   for (j=0;j<myArrays[i].length;j++){
     var sub = myArrays[i];
     result += sub[j];
   }
   if (result == found) {return true}
 }
   return false;



  function subset(arra, arra_size)
 {
    var result_set = [],
        result;


for(var x = 0; x < Math.pow(2, arra.length); x++)
  {
    result = [];
    i = arra.length - 1;
     do
      {
      if( (x & (1 << i)) !== 0)
          {
             result.push(arra[i]);
           }
        }  while(i--);

    if( result.length >= arra_size)
       {
          result_set.push(result);
        }
    }

    return result_set;
}

}
console.log(ArrayAdditionI([3,5,-1,8,12]))
