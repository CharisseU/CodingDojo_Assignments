# python code 
arr = [1,4,2,9,7,1,7,3,5,7]

def bubbleSort(arr):
    for j in range(len(arr)-1):
        #print("/n/n", "-"*50, "Iteration", j)
        for i in range(len(arr)-1-j):
        # print("\n", "*"*80, "\nindex ", i, " value", arr[i])
           # print("\n", "*"*80, "\ncomparing", arr[i], arr[i+1])
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
               # print("swapped", arr[i], arr[i+1])
               # print("array is now", arr)
            #else:
                #print("no need to swap",arr[i], arr[i+1] )
    return arr
print(bubbleSort(arr))

#or
;


arr = [1,4,2,9,7,1,7,3,5,7]

def bubbleSort(arr):
    count = 0
    for j in range(len(arr)-1):
        #print("/n/n", "-"*50, "Iteration", j)
        for i in range(len(arr)-1-j):
            count +=1
        # print("\n", "*"*80, "\nindex ", i, " value", arr[i])
           # print("\n", "*"*80, "\ncomparing", arr[i], arr[i+1])
            if arr[i] > arr[i+1]:
                arr[i], arr[i+1] = arr[i+1], arr[i]
               # print("swapped", arr[i], arr[i+1])
               # print("array is now", arr)
            #else:
    print('# of evaluations', count)            #print("no need to swap",arr[i], arr[i+1] )
    return arr
print(bubbleSort(arr))
