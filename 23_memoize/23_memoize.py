def memoization(starting, f):
    previous = starting
    def inner(n):
        nonlocal previous
        while (len(previous) < n):
            previous.append(f(previous))
        return previous[-1]
    return innerz

def fib(arr):
    return arr[-1] + arr[-2]

fibo = memoization([0, 1], fib)
print(fibo(10))
    
