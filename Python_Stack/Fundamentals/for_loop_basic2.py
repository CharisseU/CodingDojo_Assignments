#1. Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
#Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now [-1, "big", "big", -5]
def biggie_size(x):
    for i in range(len(x)):
        if x[i] > 0:
            x[i] = "big"
            print(x)
    return x;
#2. Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero #is not considered to be a positive number).
#Example: count_positives([-1,1,1,1]) changes the original list to [-1,1,1,3] and returns it
#Example: count_positives([1,6,-4,-2,-7,-2]) changes the list to [1,6,-4,-2,-7,2] and returns it
def count_positives(list):
    count = 0
    for i in range(len(list)):
        if list[i] > 0:
            count += 1
    list[len(li)-1] = count
    return list

#3. Sum Total - Create a function that takes a list and returns the sum of all the values in the array.
#Example: sum_total([1,2,3,4]) should return 10
#Example: sum_total([6,3,-2]) should return 7
def sum_total(list):
    sum = 0
    for i in range(len(list)):
        sum += list[i]        
    return sum
#4. Average - Create a function that takes a list and returns the average of all the values.
#Example: average([1,2,3,4]) should return 2.5
def average(list):
    sum += 0
    for i in range(len(list)):
        sum += list[i]
    return (sum / len(list))

#5. Length - Create a function that takes a list and returns the length of the list.
#Example: length([37,2,1,-9]) should return 4
#Example: length([]) should return 0
def length(list):
    count = 0
    for i in range(len(list)):
        count += 1
    return count
#6. Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function #return False.
#Example: minimum([37,2,1,-9]) should return -9
#Example: minimum([]) should return False
def minimum(list):
    if len(list) == 0:
        return False
    else:
        min = list[0]
        for i in range(len(list)):
            if list[i] < min:
                min = list[i]
        return min
#7. Maximum - Create a function that takes a list and returns the maximum value in the array. If the list is empty, have the function return #False.
#Example: maximum([37,2,1,-9]) should return 37
#Example: maximum([]) should return False
def maximum(list):
    if len(list) == 0:
        return False
    else:
        max = list[0]
        for i in range(len(list)):
            if list[i] > max:
                max = list[i]
        return max
#8. Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and #length of the list.
#Example: ultimate_analysis([37,2,1,-9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4 
#}
def ultimate_analysis(list):
    list_sum = 0
    list_avg = 0
    list_min = list[0]
    list_max = list[0]
    list_len = 0

    for i in range(len(list)):
        list_len += 1
        list_sum += list[i]
        if list[i] < list_min:
            list_min = list[i]
        elif list[i] > list_max:
            list_max = list[i]
    list_avg = list_sum / list_len
    
    list_attr = {
        "sumTotal": list_sum,
        "average": list_avg,
        "minimum": list_min,
        "maximum": list_max,
        "length": list_len
    }
    return list_attr



#9. Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This # 10.challenge is known to appear during basic technical interviews.)
#Example: reverse_list([37,2,1,-9]) should return [-9,1,2,37]