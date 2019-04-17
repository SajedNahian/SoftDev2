# GeneralNonCooperative - Sajed Nahian, William Lu
# SoftDev2 pd7
# K19 -- Ready, Set, Math!
# 2019-04-17 W

def union(A, B):
    return A + [x for x in B if x not in A]
print(union([1,2,3], [4,5,6]))

def intersect(A, B):
    return [x for x in A if x in B]
print(intersect([1,2,3], [1,2,6]))

def difference(A, B):
    return [x for x in A if x not in B]
print(difference([1,2,3,4], [4,5,6]))

def complement(A, U):
    return difference(U, A)
print(complement([1,2,3], [2,4,5,6,7]))

def symDiff(A, B):
    return difference(union(A, B), intersect(A, B))
print(symDiff([1,2,3,4], [2,3,4,5]))

def cartesian(A, B):
    return [[x, y] for x in A for y in B]
print(cartesian([1, 2], ['red', 'white']))

def dot(A, B):
    if len(A) != len(B):
        raise TypeError('invalid dimensions')
    return sum([A[i] * B[i] for i in range(len(A))])
print(dot([5,1,8], [3,1,2]))

def det(matrix):
    if len(matrix) != len(matrix[0]):
        raise TypeError('invalid dimensions')
    if len(matrix) == 1:
        return matrix[0][0]
    return sum( [(-1)**i * matrix[0][i] *
                det( [matrix[j][:i] + matrix[j][i+1:]  for j in range(1, len(matrix))] )
                for i in range(len(matrix))])

def cross(vectors):
    if len(vectors) != len(vectors[0]) - 1:
        raise TypeError('invalid dimensions')
    return [(-1)**i *
            det( [ v[:i] + v[i+1:] for v in vectors ] )
            for i in range(len(vectors[0]))]

# def rref(matrix):
#     # your implementation here


m = [[7, 1, 1],
     [5, 12, 4],
     [1, 1, 1]]
print(det(m))

v = [[7, 1, 5],
     [12, 3, 1]]
print(cross(v))