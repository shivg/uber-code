var array = [1, 2, 3, 4, 5, 6]

function sum (a) {
	if (a.length === 1) {
		return a[0];
	}
	var result = sum(a.slice(1));
	result += a[0];
	return result;
}

console.log(sum(array));