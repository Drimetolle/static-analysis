#include <stdio.h>

class A {
public:
    int innerA;

    int print() const {
        return innerA;
    }
};

float c = 1;

int func(int a) {
    return a;
}

int main() {
    int z, x, y = 10 + 13;
    x, z = 5;

    if (z < 0) {
        char q = 'q';
        z = 1;
    } else if (z > 0) {
        z = 2;
    } else if (z == 1) {
        z = 4;
    } else {
        z = 3;
    }
}
