function coinChange(n)
{
    if (typeof n == "object")
    {
        var money = 0;
        if ("dollars" in n)
        {
            money += n.dollars * 100;
        }
        if ("quarters" in n)
        {
            money += n.quarters * 25;
        }
        if ("dimes" in n)
        {
            money += n.dimes * 10;
        }
        if ("nickels" in n)
        {
            money += n.nickels * 5;
        }
        if ("pennies" in n)
        {
            money += n.pennies * 1;
        }
    }
    else 
    {
        money = n;
    }
    var dollars = Math.floor(money/100);
    var quarters = Math.floor((money%100)/25);
    var dimes = Math.floor(((money%100)%25)/10);
    var nickels = Math.floor((((money%100)%25)%10)/5);
    var pennies = Math.floor((((money%100)%25)%10)%5);
    var change = {};
    if (dollars != 0)
    {
        change["dollars"] = dollars;
    }
    if (quarters != 0)
    {
        change["quarters"] = quarters;
    }
    if (dimes != 0)
    {
        change["dimes"] = dimes;
    }
    if (nickels != 0)
    {
        change["nickels"] = nickels;
    }
    if (pennies != 0)
    {
        change["pennies"] = pennies;
    }
    return change;
}
console.log(coinChange(312))
console.log(coinChange(78))
console.log(coinChange({dollars: 3, quarters: 2, nickels: 1}))