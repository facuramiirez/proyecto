#include <stdlib.h>
#include <stdio.h>

float prom(float *v, int cant){
    int sum = 0.0;

    if (cant == 0){
        return NULL;
    }

    for (int i = 0; i < cant; i++)
    {
        sum += v[i]; //SIN EL &
    }
    return sum / cant;
}

int main(){

    int tam = 0;
    float v[100];
    int num;

    do{
        printf("Ingrese un numero (0 para finalizar)");
        scanf("%d", &num);
        if (num != 0){
            v[tam = num];
            tam++;    
        }
    }while (num != 0);
    
float promedio = prom(v, tam);

printf("El promedio es: %.2f\n", promedio);

    return 0;}
