#include <stdio.h>
#include "mpi.h"

double f(double x) {
    return 4.0 / (1.0 + x * x);
}

double calculate_integral(double a, double b, int num_rectangles, double delta_x) {
    double integral = 0.0;

    for (int i = 0; i < num_rectangles; ++i) {
        double x_i = a + i * delta_x;
        integral += f(x_i) * delta_x;
    }

    return integral;
}

int main(int argc, char *argv[]) {
    MPI_Init(&argc, &argv);

    int rank, size, num_rectangles;
    double a = 0.0, b = 1.0;
    double total_integral = 0.0, local_integral = 0.0;

    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);

    if (rank == 0) {
        // Master process (rank 0) takes user input
        printf("Enter the number of rectangles for integration: ");
        int scanfResult = scanf("%d", &num_rectangles);

        if (scanfResult != 1 || num_rectangles <= 0) {
            fprintf(stderr, "Error: Invalid input. Please enter a positive integer for the number of rectangles.\n");
            MPI_Abort(MPI_COMM_WORLD, 1);  // Abort MPI execution with an error code
        }
    }

    // Broadcast the user input to all processes
    MPI_Bcast(&num_rectangles, 1, MPI_INT, 0, MPI_COMM_WORLD);

    // Calculate local integral using the correct integration formula
    double delta_x = (b - a) / (double)num_rectangles;
    int local_num_rectangles = num_rectangles / size;
    int remaining_rectangles = num_rectangles % size;

    if (rank < remaining_rectangles) {
        local_num_rectangles += 1;
    }

    local_integral = calculate_integral(a + rank * delta_x * local_num_rectangles,
                                         a + (rank + 1) * delta_x * local_num_rectangles,
                                         local_num_rectangles, delta_x);

    // Use MPI_Reduce for global summation
    MPI_Reduce(&local_integral, &total_integral, 1, MPI_DOUBLE, MPI_SUM, 0, MPI_COMM_WORLD);

    if (rank == 0) {
        // Master process prints the result
        printf("Approximation of pi using %d rectangles: %lf\n", num_rectangles, total_integral);
    }

    MPI_Finalize();
    return 0;
}

