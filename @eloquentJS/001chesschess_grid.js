// Your code here.
lineOne=" "
lineTwo=""
grid=Number(prompt("Pick a grid size"));
for (iter=0;iter<(grid/2);iter++) {
  lineOne+= "# ";
  lineTwo+= "# ";
}
lineTwo+= " "
for (iterL=0;iterL<grid/2;iterL++) {
  console.log(lineOne);
   console.log(lineTwo);
}
