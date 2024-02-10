#include <stdio.h>
#include "mpi.h"
int main(int argc, char* argv[])
{
    int rank,size,fact=1,factsum,i;
    MPI_Init(&argc,&argv);
    MPI_COMM_rank(MPI_COMM_WORLD, &rank);
    MPI_COMM_size(MPI_COMM_WORLD, &size);
    for(i=1;i<=rank;i++)
        fact=fact*i;
    MPI_Reduce(&fact, &factsum,1,MPI_INT,MPI_SUM,0,MPI_COMM_WORLD);
    if(rank==0)
        printf("SUM of all the factorial=%d",factsum);
    MPI_Finalize();
    exit(0;)
}