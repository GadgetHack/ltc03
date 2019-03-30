#include <stdio.h>
int main () {
    int nums[] = {0, 1, 2, 3, 4, 5}; // - создать массив чисел
    char* names[4];

    names[0] = "Lena";
    names[1] = "Eva";
    names[2] = "Sofia";
    names[3] = "Anna";

    const int lenghtNums = sizeof(nums) / sizeof(nums[0]);
    const int lenghtNames = sizeof(names) / sizeof(names[0]);

    printf("Length of nums: %d\n", lenghtNums);
    printf("Length of names: %d\n", lenghtNames);
    
    printf("Second element in nums is: %d\n", nums[1]);
    printf("Third element in names: %s\n", names[2]);

    printf("Last element in nums is: %d\n", nums[lenghtNums-1]);
    printf("Last element in names: %s\n", names[lenghtNames-1]);
    
    return 0;
}
