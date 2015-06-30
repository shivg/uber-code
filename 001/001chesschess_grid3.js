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
for (lines=1;lines<=(rows/2);lines++){
  if ((lines*2)%rows==1) {
    break
  }
  console.log(oddRow);
  console.log(evenRow);
}
