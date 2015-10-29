sleepsort = function (f) {
	f.forEach(function (n) {
		setTimeout(function () { console.log(n) }, 1 * n)
	});
}

sleepsort([42,6,8,45,67,2,4,46,78,43,13]);
