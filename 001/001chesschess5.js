line1="";
line2="";
grid=7;
counter=1;
for (iter=1;iter<=(grid*grid);iter++) {
if(counter%2==0){
if (iter % 2 ==0) {
line1+="#";
}
else{
line1+=" ";
}
}else{
if (iter % 2 ==0) {
line1+=" ";
}
else{
line1+="#";
}
}
if(iter%8==0){
counter++;
line1+="\n";
}

}
console.log(line1);
