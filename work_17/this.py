print([str(2*x)*2 for x in range(5)])
print([10*x + 7 for x in range(5)])
print([x for x in range(2, 101) if any(x % j == 0 for j in range(2, x))])
print([x for x in range(2, 101) if not any(x % j == 0 for j in range(2, x))])
def f(q):
    return [x for x in range(1,q+1) if q%x==0]
def t(m):
    return [[m[i][j]for i in range(len(m))]for j in range(len(m[0]))]

print(f(24))
print(t([[1,2,3],[4,5,6],[7,8,9]]))
