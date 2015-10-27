function bubble(array) {
   var done = false;
	  while (! done) {
	    done = true;
    for (var i = 1; i < array.length; i++) {
	      if (array[i - 1] > array[i]) {
	        done = false;
	        var tmp = array[i - 1];
	        array[i - 1] = array[i];
	        array[i] = tmp;
	      }
	    }
	  }
	  return array;
	}
	console.log(bubble([56,34,2,35,6,75,88,56]));
  console.log(bubble([42,6,8,45,67,2,4,46,78,43,13]));
