class Test:
    x=2
    y=3
    def __init__(self,x,y):
        self.x=x
        self.y=y
    def show(self):
        print(self.x,self.y)
    @staticmethod    
    def f2():
        pass
    @classmethod
    def f3(cl):
        print(cl.x)        
t1=Test(3,2)

print(t1.x)
print(Test.x)
Test.f3()
t1.f3()
t1.show()
Test.f2()
t1.f2()