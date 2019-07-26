function maxMinAvg(arr1) 
{
    var max = arr1[0];
    var min = arr1[0];
    var sum = 0;
    for (var i = 0; i < arr1.length; i++) 
    {
        if (arr1[i] > max) 
        {
            max = arr1[i];
        }
        if (arr1[i] < min) 
        {
            min = arr1[i];
        }
        sum += arr1[i];
    }
    var avg = sum / arr1.length;
    console.log("The minimum is " + min + ", the maximum is " + max + ", and the average is " + avg + ".")
}

maxMinAvg([1,-2,9,4])