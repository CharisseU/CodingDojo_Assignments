// Assignment: Intro to MongoDB
// For This section, we want you to do the following operations in a MongoDB database. Work with a partner or a small group so everyone gets a chance to collaborate and work as a team. For some of these, you may have to refer to MongoDB's operator documentation. This is one of the most important assignments in this section, make sure you answer all questions and take notes for future assignments.

// Create a database called 'my_first_db'.
use my_first_db

// Create students collection.
db.createCollection("students")

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
// Create 5 students with the appropriate info.
db.students.insert({name:"Jack", home_state:"Washington", lucky_number:23, birthday:{month:1, day:01, year:1990}})
db.students.insert({name:"Jill", home_state:"Oregon", lucky_number:50, birthday:{month:1, day:20, year:1922}})
db.students.insert({name:"Joe", home_state:"California", lucky_number:35, birthday:{month:2, day:15, year:1995}})
db.students.insert({name:"John", home_state:"Utah", lucky_number:73, birthday:{month:1, day:4, year:1999}})
db.students.insert({name:"Jane", home_state:"Idaho", lucky_number:10, birthday:{month:10, day:15, year:2000}})

// Get all students.
db.students.find()
// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({$or:[{home_state:"California"},{home_state:"Washington"}]})

// Get all students whose lucky number is:
// greater than 3
db.students.find({lucky_number: {$gt:3}})

// less than or equal to 10
db.students.find({lucky_number: {$lte:10}})

// between 1 and 9 (inclusive)
db.students.find({ $and: [{lucky_number: {$gte:1}}, {lucky_numbers: {$lte:9}}]})

// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.update({},{$set:{interests:["coding", "brunch", "MongoDB"]}},{multi:true})

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name:"Jack"},{$push:{interests:"dance"}})
db.students.update({name:"Jill"},{$push:{interests:"clogging"}})
db.students.update({name:"Joe"},{$push:{interests:"broadway"}})
db.students.update({name:"John"},{$push:{interests:"gaming"}})
db.students.update({name:"Jane"},{$push:{interests:"horse training"}})

// Add the interest 'taxes' into someone's interest array.
db.students.update({name:"John"},{$push:{interests:"taxes"}})

// Remove the 'taxes' interest you just added.
db.students.update({name:"John"},{$pull:{interests:"taxes"}})

// Remove all students who are from California (or Washington).
db.students.remove({$or:[{home_state:"California"},{home_state:"Washington"}]})

// Remove a student by name. 
db.students.remove({name:"Jane"})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number:{$gt:5}},true)

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.insert({},{$set:{number_of_belts:0}},{multi:true})

// Increment this field by 1 for all students in Washington.
db.students.update({home_state:"Washington"},{$inc:{number_of_belts:1}},{multi:true})

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.update({home_state:"Washington"},{$inc:{number_of_belts:1}},{multi:true})

// Remove the 'lucky_number' field.
db.students.update({},{$unset:{lucky_number:""}},{multi:true})

// Add a 'updated_on' field, and set the value as the current date.
db.students.update({},{$currentDate:{"updated_on":{$type:"date"}}},{multi:true})