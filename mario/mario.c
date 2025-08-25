#include <stdio.h>
#include <string.h>
#include <math.h>

int height;

void print(void);

int main(void)
{
    printf("Height: ");
    scanf("%d", &height);

    if(height >= 1 && height <= 8)
    {
        printf("valid\n");
        print();
    }
}

void print(void)
{
    int row = 0;
    int spaces = 6 - row;
    int printedrows;
    int bricks = row;
    int printedbricks;
    int printedspaces = 0;
    
    while (printedspaces < spaces)
    {
        printf(" ");
        printedspaces++;
    }
    while (printedbricks <= row)
    {
        printf("#");
        printedbricks++;
    }
    printf("  ");
    printedbricks = 0;
    while (printedbricks <= row)
    {
        printf("#");
        printedbricks++;
    }
    printf("\n");
}