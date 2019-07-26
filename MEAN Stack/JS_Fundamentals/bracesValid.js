function bracesValid(test)
{
    var braceDict = {
        "(": ")",
        "[": "]",
        "{": "}"
    };
    var braceList = [];
    for (var i = 0; i < test.length; i++)
    {
        if (test[i] in braceDict)
        {
            braceList.push(test[i]);
        }
        for (var j in braceDict)
        {
            if (braceDict[j] === test[i])
            {
                if (braceDict[ braceList[braceList.length-1] ] != test[i])
                {
                    return false;
                }
                braceList.pop()
            }
        }
    }
    return true;
}
console.log(bracesValid("{{()}}[]"))
console.log(bracesValid("{(})"))