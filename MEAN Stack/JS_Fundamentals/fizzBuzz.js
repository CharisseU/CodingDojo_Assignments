function fizzBuzz(n) 
{
    if (n < 1 || typeof n !== "number")
    {
        console.log("Parameter must be a positive number");
        return false;
    }
    var output = "";
    for (var i = 1; i <= n; i++)
     {
        if (i % 3 == 0) 
        {
            output += "Fizz";
        }
        if (i % 5 == 0) 
        {
            output += "Buzz";
        }
        if (i % 3 != 0 && i % 5 != 0){
            output += i;
        }
        if (i == n-1)
        {
            output += " and ";
        }
        else if (i == n)
        {
            output += ".";
        }
        else 
        {
            output += ", ";
        }
    }
    console.log(output);
}
fizzBuzz(15)