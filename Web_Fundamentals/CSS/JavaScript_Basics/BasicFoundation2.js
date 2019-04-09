// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function string(x){
    for(var i=0; i<x.length; i++){
        if(x[i]>0){
            x[i]='big';
        }
    }
    return x;
}

string([-1,-3,2]);

// 2. Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function lowHigh(arr){
    var min=arr[0];
    var max=arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log(min);
    return max;
}

lowHigh([2,5,8,4]);

// 3. Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.
function printReturn(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2==! 0){
            return arr[i];
        }
        console.log(arr[arr.length-2]);
    }

}

printReturn([2,3,6,7,5,9]);

// 4. Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.
function doubles(arr){
    for(var i=0;i<arr.length;i++){
        arr[i]=2*arr[i]
    }
    return arr;
}

doubles([1,2,3]);

// 5. Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
function countPositives(arr){
    var positives=0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]>0){
            positives+=1;
        } 
    }
    arr[arr.length-1]=positives;
    return arr;
}

countPositives([-1,1,1,1]);

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

function evenOdds(arr){
    var odds=0;
    var evens=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]%2 ==! 0){
            odds+=1;
            evens=0;

            if(odds === 3){
                console.log("That's odd!");
            }
        }
        if(arr[i]%2 === 0){
            odds=0;
            evens+=1;
            if(evens === 3){
                console.log("Even more so!");
            }
        }
    }
}

evenOdds([2,5,4,4,4,2,3,3,5,7,7,7,9]);

// 7. Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.
function increment(arr){
    for(var i=1;i<arr.length; i+=2){
        arr[i]+=1;
        console.log(arr[i]);
    }
    return arr;
}

increment([1,2,4,5,6,6]);

// 8. Previous Lengths - You are passed an array containing strings.  Working within that same array, replace each string with a number - the length of the string at previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4].
function previousLengths(arr){
    for(var i=arr.length-1;i>0;i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}

previousLengths(["hello", "dojo", "awesome"]);

// 9. Add Seven to Most - Build a function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

function addSeven(arr){
    for(var i=1; i<arr.length;i++){
        arr[i]+=7;
    }
    arr.shift();
    return arr;
}

addSeven([2,4,6,8]);

// 10. Reverse Array - Given an array, write a function that reverses values, in-place.  Example: reverse([3,1,6,4,2]) return same array, containing [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverse(arr){
    for(var i=0, j=arr.length-1; i<j; i++, j--){
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

reverse([3,1,6,4,2]);

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function negative(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i]>0){
            arr[i]*=-1;
        }
    }
    return arr;
}

negative([1,-3,5]);

// 12. Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array elements are "food", then print "I'm hungry" once.

function hungry(arr){
    var food=0;
    for(var i=0;i<arr.length; i++){
        if(arr[i] === "food"){
            console.log("yummy");
            food+=1;
        }
        
    }
    if(food === 0){
        console.log("I'm hungry");
    }
}

hungry(["dog", "cat", "mouse", "cheese", "food"]);

// 13. Swap Toward the Center - Given array, swap first and last, third and third-to-last, etc.  Input[true,42,"Ada",2,"pizza"] becomes ["pizza", 42, "Ada", 2, true].  Change [1,2,3,4,5,6] to [6,2,4,3,5,1].
function swap(arr){
    var temp=0;
    for(var i=0; i<arr.length/2;i+=2){
        var n=(arr.length/2);
        temp=arr[i];
        arr[i]=arr[arr.length-i-1];
        arr[arr.length-i-1]=temp;
    }
    return arr;
}

swap([1,2,3,5,6]);


// 14. Scale the Array - Given an array arr and a number num, multiply all values in arr by num, and return the changed array arr.  For example, scaleArray([1,2,3],3) should return [3,6,9].

function scaleArray(arr, num){
    for(var i=0; i<arr.length; i++){
        arr[i]*=num;
    }
    return arr;
}

scaleArray([1,2,3],3);