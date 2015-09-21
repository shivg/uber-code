
function bubblesort(arr){
for (i=0;i<arr.length;i++){
  arr.reduce(function compare(prev,current,index){
  //  console.log("prev "+prev+"current "+current+" index "+index);
 if (current < prev) {
   arr[index] = prev;
   arr[index-1] = current;}
  });
}
return arr.toString()
}


console.log(bubblesort([42,6,8,45,67,2,4,46,78,43,13]));
