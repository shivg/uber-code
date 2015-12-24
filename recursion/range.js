function range (a,b, result) {
	result = result ? result : [];
	if (b-a === 1) return result;
	result.push(++a);
	return range(a,b,result);
}

console.log(range(2,5));

var ranged = function(start_num, end_num)   
{  
  if (end_num - start_num === 2)   
  {  
    return [start_num + 1];  
  }   
  else   
  {  
    var list = ranged(start_num, end_num - 1);  
    list.push(end_num - 1);  
    return list;  
  }  
};  
  
console.log(ranged(2,9));
