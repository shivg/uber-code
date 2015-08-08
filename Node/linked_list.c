#include <stdlib.h>
int main(){
  struct Node {
    int value;
    struct Node* next;
  };
struct Node* x;
struct Node* y;
struct Node* z;

  x = malloc(sizeof(Node));
	y = malloc(sizeof(Node));
	z = malloc(sizeof(Node));
x->value=1;
y->value=2;
z->value=3;

x->next = y;
y->next = z;
z->next = x;

}
