rows=8;
oddRow="";
evenRow="";

for (rcount=1;rcount<=rows;rcount++){
if (rcount%2==0) {

  evenRow+="#";
  oddRow+=" ";

  }
  else {
    oddRow+="#";
    evenRow+=" ";
  }
}

if (rows%2==0)
  for (lines=1;lines<(rows/2);lines++) {
console.log(oddRow);
console.log(evenRow);
  }
else {
  for (lines=1;lines<(rows/2);lines++) {
console.log(oddRow);
    if (lines=rows-1)
    {
      break
    }
console.log(evenRow);
  }
