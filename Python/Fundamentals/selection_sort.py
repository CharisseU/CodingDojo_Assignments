# Python Selection Sort 
import sys 
list = [88, 99,33, 66, 55, 44, 77, 22, 11] 
def selectionSort():
    for i in range(len(list)): 
        # Find the minimum element in remaining 
        min_idx = i 
        for j in range(i+1, len(list)): 
            if list[min_idx] > list[j]: 
                min_idx = j                 
# Swap the minimum element with the first element		 
    list[i], list[min_idx] = list[min_idx], list[i]                 

selectionSort() 
# Driver code to test above 
print ("Sorted array") 
for i in range(len(list)): 
	print("%d" %list[i]),

    