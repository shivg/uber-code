#include <stdio.h>
int main() {
  int myArray[5][2] = {{1,2}, {3,4}, {5,6}, {7,8}, {9,10}};
  int x,y;
  for (x=0;x<3;x++){
    for (y=0;y<4;y++){

      printf("myArray (%d,%d)= %d\n",x,y, myArray[x][y]);
    }
  }
}
