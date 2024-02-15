import numpy as np
import random
A = np.array ([2,5,10])
print(A.dtype)

B=np.array ([2.4,10.6,5.2])
B.dtype

Z=np.zeros((2,4))

S=np.arange(10,30,5)
print(S)

S1=np.linspace(0,2,9)
print(S1)

print(random.choice([1,2,3,4,5]))
print(random.choice('python'))
print(random.randrange(25,50))
print(random.random())
print(random.uniform(5,10))
print(random.shuffle([1,2,3,4,5]))
print(random.seed(10))

a = np.arange(15).reshape(3, 5)
print(a.shape)
c = np.arange(24).reshape(2,3,4)
print(c)

l = np.array( [20,30,40,50] )
m = np.arange( 4 )
n = l-m
print(n)

P= np.array( [[1,1],[0,1]] )
Q = np.array( [[2,0],[3,4]] )

print(np.dot(P, Q))

y = np.arange(10)**3
print(y[2:5])
print(y[0:6:2])

j=np.array([(3,2,9),(1,6,7)])
j1=0
for row in j:
    for col in row:
        j1+=col
print(j1)