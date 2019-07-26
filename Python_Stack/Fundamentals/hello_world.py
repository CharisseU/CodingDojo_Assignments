# 1. TASK: print "Hello World"  Write the code to print a literal string saying "Hello World" (#1)
 # un the file
print( "Hello World" )


# 2. Store your name in a variable, and then use it to print the string “Hello {{your name}}!” using a comma in the print function 
 # Run the file 
name = "Charisse"
print( "Hello", name )	# with a comma
#2a. store your name in a variable, and then use it to print the string “Hello {{your name}}!” using a + in the print function (#2b)
 #Run the file
print( "Hello " + name)	# with a +


# 3. Store your favorite number in a variable, and then use it to print the string “Hello {{num}}!” using a comma in the print function (#3a)
# Run the file
name = 73
print("Hello ", name )	# with a comma
#3a Store your favorite number in a variable, and then use it to print the string “Hello {{num}}!” using a + in the print function (#3b)
# Run the file
print( "Hello  " +  name )	# with a +	-- this one should give us an error!
 # NINJA BONUS: Figure out how to resolve the error from above, without changing the + sign to a comma
print( "Hello  " +  str(name) )


# 4. Store 2 of your favorite foods in variables, and then use them to print the string “I love to eat {{food_one}} and {{food_two}}.” with the format method (#4a)
 #Run the file
# Store 2 of your favorite foods in variables, and then use them to print the string “I love to eat {{food_one}} and {{food_two}}.” with f-strings (#4b)
# Run the file

fave_food1 = "ice cream"
fave_food2 = "pizza"
print( "I love to eat {} and {}".format(fave_food1, fave_food2) ) # with .format()
print( "I love to eat %s and %s" % (fave_food1, fave_food2)) # with an f string
# NINJA BONUS: Spend a few minutes playing around with other string methods to see what’s out there!
print("I love to eat {2} , {1} and {0} !".format("chicken", "ice cream", "pizza"))