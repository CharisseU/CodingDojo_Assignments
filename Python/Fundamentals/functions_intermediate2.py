#1. Update Values in Dictionaries and Lists
x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]
sports_directory = {
    'basketball' : ['Kobe', 'Jordan', 'James', 'Curry'],
    'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]
#Change the value 10 in x to 15. Once you're done, x should now be [ [5,2,3], [15,8,9] ].
x[1][0] = 15
#   Change the last_name of the first student to "Bryant"
students[1]["last_name"] = "Bryant"
#   In sports_directory, change "Messi" to "Andres"
sports_directory["soccer"][0] = "Andres"
#   Change value 20 in z to 30
z[0]["y"] = 30


#2. Iterate Through a List of Dictionaries
# Should output:
# first_name - Michael, last_name - Jordan etc
students = [
    {"first_name": "Michael", "last_name": "Jordan"},
    {"first_name": "John", "last_name": "Rosales"},
    {"first_name": "Mark", "last_name": "Guillen"},
    {"first_name": "KB", "last_name": "Tonel"}
]
def interateDictionary(list):
    for i in range(len(students)):
        print(f"first_name - {students[i]['first_name']}, last_name - {students[i]['last_name']}")


#3. Create a function iterateDictionary2(key_name, some_list) that, given a list of dictionaries and a key name, 
# the function prints the value stored in that key for each dictionary. For example, iterateDictionary2
# ('first_name', students) should output:
dojo = {
    "locations": ["San Jose", "Seattle", "Dallas", "Chicago", "Tulsa", "DC", "Burbank"],
    "instructors": ["Michael", "Amy", "Eduardo", "Josh", "Graham", "Patrick", "Minh", "Devon"]
}
def iterateDictionary2(key_name,some_list):
    for i in range(len(some_list)):
        print(some_list[i][key_name])
iterateDictionary2("first_name ", students)
iterateDictionary2("last_name ", students)

#4. Iterate Through a Dictionary with List Values
#Create a function printInfo(some_dict) that given a dictionary whose values are all
# lists, prints the name of each key along with the size of its list, and then prints 
# the associated values within each key's list. 

dojo = {
    "locations": ["San Jose", "Seattle", "Dallas", "Chicago", "Tulsa", "DC", "Burbank"],
    "instructors": ["Michael", "Amy", "Eduardo", "Josh", "Graham", "Patrick", "Minh", "Devon"]
}
def printInfo(some_dict):
    list = list(some_dict.items())
    for i in range(len(some_dict)):
        print(f"{len(list[i][1])} {some_dict[i][0].upper()}")
        for j in range(len(list[i][1])):
            print(f"{list[i][1][j]}")            
    return False
printInfo(dojo)

