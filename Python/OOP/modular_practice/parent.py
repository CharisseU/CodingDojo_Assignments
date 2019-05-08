def square(x):
    return x * x
class User:
    def __init__(self, name):
        self.name = name
    
print(__name__)
if __name__ == "__main__":
    print("The file is being executed directly")
else:
    print("The file is being executed because it is imported by another file. The file is called: ",__name__)