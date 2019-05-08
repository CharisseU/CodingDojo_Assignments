#import the python testing framework
import unittest
#our "unit"
#this is what we are running our test on
def reverseArray(list):
    for i in range(int(len(list)/2)):
        list[i], list[len(list)-i-1] = list[len(list)-i-1], list[i]
        return list

def anotherFunction(list):
    pass


# our "unit tests"
# initialized by creating a class that inherits from unittest.TestCase
class reverseArrayTests(unittest.TestCase):
    # each method in this class is a test to be run
    def testOne(self):
        self.assertEqual(reverseArray([1,2,3]), [3,2,1])
    def testTwo(self):
        self.assertEqual(reverseArray([5,1,2,3]), [3,2,1,5])
    # any task you want to run after the tests are executed, put them in the setUp method
    def setUp(self):
        # add the setup tasks
        print("running setUp")
    # any task ou want to run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        print("running tearDown tasks") 

class reverseArrayTests(unittest.TestCase):
    # each method in this class is a test to be run
    def testOne(self):
        self.assertEqual(reverseArray([1,2,3]), [3,2,1])
    def testTwo(self):
        self.assertEqual(reverseArray([5,1,2,3]), [3,2,1,5])
    # any task you want to run after the tests are executed, put them in the setUp method
    def setUp(self):
        # add the setup tasks
        print("running setUp")
    # any task ou want to run after the tests are executed, put them in the tearDown method
    def tearDown(self):
        print("running tearDown tasks") 


if __name__== '__main__':
    unittest.main() # this runs our tests