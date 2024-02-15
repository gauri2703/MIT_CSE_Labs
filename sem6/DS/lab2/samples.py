import pandas as pd
import numpy as np


s = pd.Series([3,9,-2,10,5])
print(s.sum(),s.min(),s.max())

data = [['Dinesh',10],['Nithya',12],['Raji',13]]
df = pd.DataFrame(data,columns=['Name','Age'])
print(df)

data1 = {'Name':['Kavitha', 'Sudha', 'Raju','Vignesh'],'Age':[28,34,29,42]}
df1 = pd.DataFrame(data, index=['rank1','rank2','rank3','rank4'])
print(df)

df2=pd.DataFrame({'A':pd.Timestamp('20130102'),'B':np.array([3]*4,dtype='int32'),
'C':pd.Categorical(['Male','Female','Male','Female'])})
print(df1)


print(df2.shape)
print(df2.dtypes)
print(df2.head())
print(df2.tail())
print(df2.describe())

print(df.head())
print(df.tail())
print(df.index)
print(df.columns)
print(df.T)
print(df.sort_index(axis=1,ascending=False))
print(df.sort_values(by='Name'))
print(df[0:3])
print(df.iloc[0:2])


print(df[df['Age']>30])
df['Gender']=['Male','Female','Female','Male']
print(df)

df.drop('Gender',axis=1,inplace=True)
print(df)
df.drop('rank1',axis=0,inplace=True)
print(df)
