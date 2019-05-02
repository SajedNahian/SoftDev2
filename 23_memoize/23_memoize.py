def memoization(f):
    mem = {}
    def memoized(*args):
        if (args) in mem:
            return mem[args]
        return f(args)
    return memoized

@memoization
def fibonacci(args):
    n = args[0]
    if (n == 0):
        return 0
    if (n == 1):
        return 1
    return fibonacci(n-2) + fibonacci(n-1)

print(fibonacci(10)) # expecting 55
