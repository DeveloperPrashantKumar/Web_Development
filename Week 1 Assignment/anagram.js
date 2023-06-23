module.exports = isAnagram;
`npm run test-anagram`

function isAnagram(str1,str2)
{
    
    str1 = str1.split("").sort().join("");
    str2 = str2.split("").sort().join("");
    if(str1==str2)
    return true;
    else return false;
}

var value = isAnagram("prashant","prashant");
console.log(value);