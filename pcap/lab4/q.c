#include<stdio.h>
#include "mpi.h"

double f(double x){
    return 4.0/ (1.0 +x *x);

}

double calculate_integral(double a,double b,int num_rectangles, double delta_x){
    double integral=0.0;
    for (int i=0; i<num_rectangles ; ++i){
        double x_i= a+i * delta_x;
        integral +=f(x_i)* delta_x;

    }
    return integral;
}
int main(int argc, char *argc[]){
    MPI_Init(&argc, &argv);
    int rank, size,num_rectangles;
    double a=0.0,b=1.0;
    double total_integral=0.0,local_integral=0.0;
    MPI_Comm_rank(MPI_COMM_WORLD,&rank);
    MPI_Comm_rank(MPI_COMM_WORLD,&size);
    if (rank==0){
        print("enter the number of rectangles for integration:");
        int scanfResult=scanf("%d", &num_rectangles);
        if (scanfResult!=1||num_rectangles<=0){
            fprintf(srderr, "Error:INvalid input.polease enter a positive integers for rectangles.\n");
            MPI_Abort(MPI_COMM_WORLD,1):

        }
    }
    MPI_Bcast(&num_rectangles,1, MPI_INT,0,MPI_COMM_WORLD);
    double delta_x=(b-a)/(double)num_rectangles;
    int local_num_rectangles=num_rectangles/size;
    int remaining_rectangles=num_rectangles%size;
    if (rank<remaining_rectangles){
        local_num_rectangles +=;
    }ta_x;
        integral +=f(x_i)* delta_x;

    }
    return integral;
}
int main(int argc, char *argc[]){
    MPI_Init(&argc, &argv);
    int rank, size,num_rectangles;
    double a=0.0,b=1.0;
    double total_integral=0.0,local_integral=0.0;
    MPI_Comm_rank(MPI_COMM_WORLD,&rank);
    MPI_Comm_rank(MPI_COMM_WORLD,&size);
    if (rank==0){
        print("
}  
