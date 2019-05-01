def repeat(word):                
    def inner(num):              
        print(word*num)          
    return inner                 
                     
def make_counter():              
    count = 1                    
    def counter():               
        nonlocal count           
        print(count)             
        count += 1               
    return counter

r1 = repeat('hello')
r1(2)
r2 = repeat('goodbye')
r2(2)
repeat('cool')(3)

ctrl1 = make_counter()           
ctrl1()      
ctrl1()       
ctrl2 = make_counter()           
ctrl2()                          
ctrl1()                          
ctrl2()

