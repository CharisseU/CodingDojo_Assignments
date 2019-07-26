#1. Basic - Print all integers from 0 to 150.
for x in range(1, 150):
    print(x)


#2. Multiples of Five - Print all the multiples of 5 from 5 to 1,000
for x in range(5, 1000, 5):
    print(x)


#3. Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".

for i in range(0, 100, 1):
    if(i%10==0):
        print("Coding")
    elif(i%5==0):
        print("Coding Dojo")
    else:
        print(i)

#4. Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.

max = 500000
sum = 0

for number in range(1, max+1):
    if(number % 2 != 0):        
        sum = sum + number

print("The Sum of Odd Numbers from 1 to {0} = {1}".format(number, sum)) 


#5. Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.

for i in range(2018, 0, -4):
    print(i)
    

#6. Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, the loop should print 3, 6, 9 (on successive lines)
lowNum = 1
highNum = 10
mult = 3
for i in range(lowNum, highNum, mult):
    print(i)
