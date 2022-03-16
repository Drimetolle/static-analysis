struct Struct1 {
  int age;
  long ss;
  float weight;
  char name[25];
  const char * secondName;
  const char secondName2;
};

int intVar = 1;
Struct1 Struct1Var = 1;

// int main(int) {
//   char* a = "12";
//
//   while(1) {
//
//   }
// }

// void Foo() {
// }
//
// void Foo2(int *ptr)
// {
//   while (ptr == NULL)
//     return
//   Foo();
// }

// void main() {
//   try {
//     int a = 1;
//   } catch (MyExcept &)
//   {
//     afd();
//   }
// }

void main() {
  switch(1) {
    case 1:
      break;
    case 2:
      break;
    default:
    {
      some();
      break;
    }
//     Not work ;(
//     default:
//       some();
//       break;
  }
}
