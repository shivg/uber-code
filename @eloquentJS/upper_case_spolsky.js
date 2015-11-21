function upperStr(string){
var test=/^[A-Z]{1}/;var nottest = /^[a-z]{1}/
// evaluate for the regular expression /^[A-Z]{1}/ for the first letter. If it matches that's it
if (test.test(string)) {return console.log("The first letter was capitalized");}
else if (nottest.test(string)) {
return console.log("First letter was not capitalized");
} else {return console.log("The first letter is not an alphabet");}

}
"Edit in original dir"
upperStr("1harmi")

"Hello" 

"Added some more lines"