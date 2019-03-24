#include <stdio.h>


float bmi (float weight, float height) 
{
  return weight / (height  * height);
}

int main (void)

{
    float weight = 0.0;
    float height = 0.0;
    float BMI = 0.0;
    char m2[]="";

    printf ("Please enter your gender: ");
    scanf("%f", &mail);
    printf ("Please enter your weight in kilograms: ");
    scanf("%f", &weight);
    printf("Please enter your height in centimeters: ");
    scanf("%f", &height);

    BMI = bmi(weight, height / 100);
    if(BMI <= 18.5)
    {
        printf("\nYour BMI is %f: Underweight.\n",BMI);
    }
    else if(BMI <= 24.99)
    {
        printf("\nYour BMI is %f: Normal.\n",BMI);
    }
    else if(BMI <= 29.99)
    {
        printf("\nYour BMI is %f: Overweight.\n",BMI);
    }
    else
    {
        printf("\nYour BMI is %f: Obesity.\n",BMI);
    }

// **


    return 0;
}