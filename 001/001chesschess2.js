line1="";
grid=8;
for (iter=1;iter<=(grid*grid);iter++) {

if  (iter%2==0)
  {
    line1+="#"
  }
else
{
  line1+=" "
  }
 if (iter%grid==0) {
line1+=" \n"
}
}
console.log(line1)
