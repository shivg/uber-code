function MeanMode(arr) {

 arr.sort(function(a,b){
 return a-b;
 });
 var tot = arr.reduce(function (prev,element){
  return prev+element;
  });
  var meanR =  tot / (arr.length);
  var modeR = arr[Math.ceil(arr.length/2)]

  var realMode,
      countVal = {};
  arr.reduce(function(prev,elem,index){
    if (prev.indexOf(elem) == -1) {prev.push(elem)}
    else {countVal[elem] = index}
    return prev;
  },[]);
//  util = require("util");
//  var str_obj = util.inspect(countVal);
//  console.log(str_obj);

  function mode(array)
{
    if(array.length == 0)
    	return null;
    var modeMap = {};
    var maxEl = array[0], maxCount = 1;
    for(var i = 0; i < array.length; i++)
    {
    	var el = array[i];
    	if(modeMap[el] == null)
    		modeMap[el] = 1;
    	else
    		modeMap[el]++;
    	if(modeMap[el] > maxCount)
    	{
    		maxEl = el;
    		maxCount = modeMap[el];
    	}
    }
    return maxEl;
}
realMode = mode(arr);
  if (realMode == meanR) return 1; else return 0

}

console.log(MeanMode([5,3,3,3,3,2,2,2,1]));
