var str = "Sharmi is Awesome"
var reverse = [];
var len=str.len;
str.split("").map(function(char){
reverse[len]=char;
len -= 1
});
console.log(reverse)
