//Iterative solution
function iterBinarySearch(arr,n)
{
    while (arr.length > 0){
        if (arr[arr.length-1] < n || arr[0] > n)
        {
            return -1;
        }
        else if (arr[arr.length/2] == n)
        {
            return arr.length/2;
        }
        else if (arr[Math.floor(arr.length/2)] > n)
        {
            arr = arr.slice(0, arr.length/2)
        }
        else if (arr[Math.floor(arr.length/2)] < n)
        {
            arr = arr.slice(arr.length/2 + 1, arr.length)
        }
    }
}
console.log("iterative")
console.log(iterBinarySearch([1,3,8,10,12,15,17,20,22,34,40,50,52,78,87,90,91,92,94,200], 93))
console.log ( iterBinarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15) )
// The time complexity is O(log(n))

//recursive solution
function binarySearch(arr, n)
{
    if (arr[arr.length-1] < n || arr[0] > n)
    {
        return -1;
    }
    if (arr[arr.length/2] == n)
    {
        return arr.length/2
    }
    else if (arr[Math.floor( arr.length/2 )] > n)
    {
        return binarySearch(arr.slice(0, arr.length/2 ), n)
    }
    else if ( arr[Math.floor( arr.length/2 )] < n )
    {
        return binarySearch(arr.slice(arr.length/2 + 1, arr.length), n)
    }
}
console.log("recursive")
console.log(binarySearch([1,3,8,10,12,15,17,20,22,34,40,50,52,78,87,90,91,92,94,200], 93))
console.log ( binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 15) )
// the time complexity is O(log(n))
