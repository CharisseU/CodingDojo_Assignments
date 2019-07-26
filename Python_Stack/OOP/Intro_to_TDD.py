import unittest

#reverseList - Write a function that reverses the values in the list (without creating a temporary array).
#Example: reverseList([1,3,5]) should return [5,3,1]  Example Test: assertEqual( reverseList([1,3,5]), [5,3,1] )
def reverse_list(arr):
    for i in range(int(len(arr)/2)):
        temp = arr[i]
        arr[i] = arr[len(arr)-(i+1)]
        arr[len(arr)-(i+1)] = temp
    return arr
    
class Reverse_list_tests(unittest.TestCase):
    def test_1(self):
        self.assertEqual(reverseList([1,5,10]), [10,5,1])
    def test_2(self):
        self.assertEqual(reverseList(["c","h","a","r","i","s","s","e"]), ["e","s","s","i","r","a","h","c"])
    def test_3(self):
        self.assertEqual(reverseList([True]), [True])
    def test_4(self):
        self.assertEqual(reverseList([1,3,5]), [5,3,1])
if __name__ == "__main__":
    unittest.main()

#isPalindrome - Write a function that checks whether the given word is a palindrome (a word that spells the same backward).
#Example: isPalindrome("racecar") should return True
#Example Test: assertEqual( isPalindrome("racecar"), True ) or assertTrue( isPalindrome("racecar"))
#Example Test: assertFalse( isPalindrome("rabcr") ).   
def is_palindrome(word):
    word = word.upper()
    for i in range (int(len(word)/2)):
        if word[i] != word[len(word)-(i+1)]:
            return False

class is_palindromTests(unittest.TestCase):
    def test_1(self):
        self.assertTrue(is_palindrome("racecar"))
    def test_2(self):
        self.assertFalse(is_palindrome("racbr"))
    def test_3(self):
        self.assertTrue(is_palindrome("hannah"))
    def test_4(self):
        self.assertFalse(is_palindrome("Madam in eden Im Adam"))
    def test_5(self):
        self.assertTrue(is_palindrome("Go Hang a Salami Im a Lasagna Hog"))
    def test_6(self):
        self.assertTrue(isPalindrome("A Santa Lived As a Devil At NASA"))
    def test_7(self):
        self.assertFalse(is_palindrome("Dammit Im Mad"))
if __name__ == "__main__":
    unittest.main()

#coins - Write a function that determines how many quarters, dimes, nickels, and pennies to give to a customer for a change where you minimize the number of coins you give out.
#Example: given 87 cents, result should be 3 quarters, 1 dime, 0 nickel and 2 pennies
#Example Test: assertEqual( coin(87), [3,1,0,2] )
def coins(x):
    quarters = int(x / 25)
    dimes = int((x % 25) / 10)
    nickels = int(((x % 25) % 10) / 5)
    pennies = int(((x % 25) % 10) % 5)
    change = [quarters, dimes, nickels, pennies]
    return change
    
class coins_test(unittest.TestCase):
    def test_1(self):
        self.assertEqual(coins(87), [3,1,0,2])
    def test_2(self):
        self.assertEqual(coins(25), [1,0,0,0])
    def test_3(self):
        self.assertEqual(coins(10), [0,1,0,0])
    def test_4(self):
        self.assertEqual(coins(5), [0,0,1,0])
    def test_5(self):
        self.assertEqual(coins(1), [0,0,0,1])
    def test_6(self):
        self.assertEqual(coins(32), [1,0,1,2])
if __name__ == "__main__":
    unittest.main()

#BONUS - factorial - Write a recursive function that returns the factorial of a given number. Remember that the factorial of a number is the product of all the numbers between 1 and the given number (eg. 4! = 4*3*2*1).
#Example: factorial(5) should return 120.
def factorial(number):
    if number == 0:
        return 1
    else:
        return number * factorial(number-1)

#BONUS - fibonacci - Write a recursive function that accepts a number, n, and returns the nth Fibonacci number from the sequence. The first 2 Fibonacci numbers are 0 and 1. Every number after that is calculated by adding the previous 2 numbers from the sequence. (i.e. 0, 1, 1, 2, 3, 5, 8, 13, 21 ...)
#Example: fibonacci(5) should return 3 (the 5th number in the sequence is 3).
def fibonacci(number):
    if number == 0:
        return 1
    else:
        return number * fibonacci(number-1)

class fibonacci(unittest.TestCase):
    def test_1(self):
        self.assertEqual(fibonacci(5), 120)
    def test_2(self):
        self.assertEqual(fibonacci(0), 1)
    def test_3(self):
        self.assertEqual(fibonacci(4), 24)
if __name__ == "__main__":
    unittest.main()