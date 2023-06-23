var name = "PrashantKumar";
var age = 29;
var users = ["Prashant", "Raman", "Harkirat"];
var user1 = "Prashant";
var user2 = {
    name:"Prashant",
    age:20,
    phone : 9711231238,
}
console.log(user2)
console.log(users);
console.log(users[3]);
console.log(users[1]);
for(var i=0 ;i<users.length;i++){
    console.log(users[i]);
}
var user = [
        {namee:'Prashant',agee:22},
        {namee:"raman",agee:19}
];
console.log(user.length);
for( var i =0 ;i< user.length;i++)
{
    const tolog = user[i].namee + "'s age is "  + user[i].agee;
    console.log(tolog);
}
function printAllUsers(user){

    for( var i =0 ;i< user.length;i++)
{
    const tolog = user[i].namee + "'s age is "  + user[i].agee;
    console.log(tolog);
}
}
printAllUsers(user);
function sumofAll(startIndex, endingIndex)
{
    var sum=0;
    for(var i=startIndex;i<= endingIndex;i++)
    {
        sum= sum +i;
    }
    return sum;
}
let sumi = sumofAll(1,100);
console.log(sumi);
function sum(index1, index2)
{
    return index1 + index2;
}
function multiply(index1,index2)
{
    return index1 * index2;
}
function divide(index1,index2)
{
    return index1 / index2;
}
function doArithmetic(firstEl, secondEl, arithmeticFn)
{
    return arithmeticFn ( firstEl,secondEl);
}
let answer = doArithmetic(1,2,multiply);
console.log(answer);

function printPattern(num)
{
    for(var i =0 ;i<num;i++)
    {
        var show = "";
        for(var j=0;j<=i;j++)
        {
            show  = show +"*";
        }
        console.log(show);
        
    }
}
printPattern(10);
