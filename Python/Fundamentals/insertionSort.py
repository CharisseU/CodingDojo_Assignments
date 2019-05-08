#Python Insertion Sort
import sys
list = [99, 88, 77, 66, 55, 44, 33, 22, 11]

def insertionSort(list):
    for i in range(1, len(list)):
        key = list[i]
        j = i-1
        while j>=0 and key < list[j]:
            list[j+1] = list[j]
            j-=1
        list[j+1] = key

insertionSort(list)
print ("Sorted array is: ")
for i in range(len(list)):
    print (list[i])
