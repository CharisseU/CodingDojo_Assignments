// Hoisting 

//console.log(example)
//let example = "I'm the example";
//After Hoisting
console.log(example)
let example = "I'm the example"

//problem 1
//console.log(hello);
//var hello = 'world;'
//After Hoisting
var hello;
var hello = "world";
console.log(hello);

//problem 2
//var needle = 'haystack';
//test();
// function test()
// {
//     var needle = 'magnet';
//     console.log(needle);
// }
//After Hoisting
var needle;
needle ='haystack';
function test()
{
    var needle;
    needle ='magnet';
    console.log(needle) //prints 'haystack'
}

//problem 3
//var brendan = 'super cool';
// function print()
// {
//     brendan = 'only ok';
//     console.log(brendan);
// }
// console.log(brendan);
//After Hoisting
var brendan;
brendan = 'super cool';
function print()
{
    brendan = 'only okay';
    console.log(brendan);  //prints 'only ok'
}
console.log(brendan);  //prints 'super cool'

//problem 4
//var food = 'chicken';
//console.log(food);
//eat();
//function eat()
// {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';    
// }
//After Hoisting
var food;
function eat() 
{
    var food;
    food = 'half-chicken';
    console.log(food); //prints 'half-chicken'
    food = 'gone';
}
food = 'chicken';
console.log(food) //prints 'chicken'
eat();

//problem 5
//mean();
// console.log(food);
// var mean = function() 
// {
//     food = 'chicken';
//     console.log(food);
//     var food = 'fish';
//     console.log(food);
// }
// console.log(food);
//After Hoisting
var mean;
mean = function()
{
    var food;
    food = 'chicken';
    console.log(food);  //prints 'chicken'
    food = 'fish';
    console.log(food) //prints 'fish'
}
console.log(food)  //variable doesn't exist
console.log(food)  //variable doesn't exist

//problem 6
//console.log(genre);
// var genre = 'disco';
// rewind();
// function rewind() 
// {
//     genre = 'rock';
//     console.log(genre);
//     var genre = 'r&b';
//     console.log(genre);
// }
// console.log(genre);
//After Hoisting
var genre;
function rewind()
{
    genre = 'rock';
    console.log(genre);  //prints 'rock'
    genre = r&b;
    console.log(genre); //prints 'r&b'
}
console.log(genre);  //undefined 
genre = 'disco';
rewind();
console.log(genre); //prints 'disco'

//problem 7
// dojo = 'san jose';
// console.log(dojo);
// learn();
// function learn()
// {
//     dojo = 'seattle';
//     console.log(dojo);
//     var dojo = 'burbank';
//     console.log(dojo);
// }
// console.log(dojo);
//After Hoisting
function learn()
{
    var dojo;
    dojo = 'seattle;
    console.log(dojo);  //prints 'seattle'
    dojo = 'burbank';
    console.log(dojo); // prints 'burbank'
}
dojo = 'san jose'; 
console.log(dojo) // prints 'san jose'
learn();
console.log(dojo);// prints 'san jose'

//problem 8 - Bonus ES6: const
// console.log(makeDojo('Chicago', 65));
// console.log(makeDojo('Berkeley', 0));
// function makeDojo(name, students)
// {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if(dojo.students > 50)
//     {
//         dojo.hiring = true;
//     }
//     else if(dojo.students <= 0)
//     {
//         dojo = 'closed for now';
//     }
//     return dojo;
// }
//After Hoisting

function makeDojo(name, students)
{
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50) 
    {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0)
    {
        dojo = 'closed for now';
    }
    return dojo;
}
console.log(makeDojo("Chicago", 65)); 
console.log(makeDojo("Berkeley", 0));