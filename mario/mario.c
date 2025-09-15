#include <stdio.h>
#include <string.h>
#include <math.h>

int height;
int valid = 0;
int key1pressed = 0;

void print(void);
void getheight(void);

int main(void)
{
    // Introduction Text
    printf ("Welcome to Mario!\n Type any number from 1-8 to create a double pyramid from Super Mario\n Made from hashtags and spaces.\n Type 1 to begin\n");
        while (!key1pressed == 1);
        {
            scanf("%d", &key1pressed);
            if (key1pressed == 1)
            {
                getheight();
            }
        }
        return 0;
}

void getheight(void)
{
    printf("Height: ");
    scanf("%d", &height);
    if(!valid == 1)
    {
        if(height >= 1 && height <= 8)
        {
            valid = 1;
            printf("Valid! Printing...\n");
            print();
        }
        else if (height == 9)
        { 
            // help text
             printf("MARIO HELP\n
                Type any number from 1-8, and the terminal will output a double pyramid from\n
                Super Mario made from hashtags and spaces.\n");
        }
        else
        {
            printf("Invalid! Type 9 for instructions.\n");
            valid = 0;
        }
    }
}

void print(void) // todo: Optimize this! 
{
    int row = 0;
    int spaces = height - 1;
    int printedrows;
    int bricks = 0;
    int printedbricks = 0;
    int printedspaces = 0;
    int cycles = 0;

    while (cycles < height)
    {
        while (printedspaces < spaces)
        {
            printf(" ");
            printedspaces++;
        }
        while (printedbricks <= bricks)
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
        row++;
        cycles++;
        printedspaces = 0;
        printedbricks = 0;
        spaces--;
        bricks++;
    }
}