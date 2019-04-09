
//1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function loop(){
    var arr = [];
    for(var i=1; i<=255; i++){
        arr.push(i);
    }

    return arr;
}
//2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
loop();

function even(){
    sum=0;
    for(var i=0; i<=1000; i+=2){
        sum+=i;
    }
    return sum;
} 
//3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
even();

function odd(){
    sum=0;
    for(var i=1; i<=5000; i+=2){
        sum+=i;
    }
    return sum;
}
//4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
odd();

var x=[];
function values(x){
    var arr=[];
    sum=0;
    for (var i=0; i<x.length; i++){
        sum+=x[i];
    }

    return sum;
}
//5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
values([1,2,5]);

function max(arr){
    var max=arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;

}
//6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
max([-3,3,5,7]);

function average(x){
    sum=0;
    for(var i=0; i<x.length; i++){
        sum+=x[i];
    }

    return (sum/x.length);
}

average([1,3,5,7,20]);
//7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function oddArray(){
    var arr=[];
    for(var i=1; i<=50;i=+2){
        arr.push(i);
    }

    return arr;
}

oddArray();
//8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function numGreater(arr,y){
    var greater=0;
    for(var i=0; i<arr.length; i++){
        if(arr[i]>y){
            greater+=1;
        }
    }

    return greater;
}

numGreater([1,3,5,7], 3);
//9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function square(x){
    for(var i=0; i<x.length; i++){
        x[i]*=x[i];
    }

    return x;
}

square([1,5,10,-2]);
//10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function negative(x){
    for(var i=0; i<x.length; i++){
        if(x[i]<0){
            x[i]=0;
        }
    }
    return x;
}

negative([1,5,10,-2]);
//11. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function maxminAvg(arr){

    if(arr.length===0){
        console.log("none");
        return;
    }
    var sum= arr[0];
    var max=arr[0];
    var min=arr[0];

    for(var i=1; i<arr.length; i++){
        if(arr[i]<min){
            min=arr[i];
        }
        if(arr[i]>max){
            max=arr[i];
        }
        sum+=arr[i];
    }
    console.log(max,min,(sum/arr.length));
}
maxminAvg([1,5,10,-2]);

//12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr){

    var temp= arr[0];
    arr[0]= arr[arr.length-1];
    arr[arr.length-1]=temp;
}
//13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function string(x){
    for(var i=0; i<x.length; i++){
        if(x[i]<0){
            x[i]='Dojo';
        }
    }
    return x;
}

string([-1,-3,2]);