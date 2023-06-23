function printfunction1()
{
    console.log("Hello WOrld");
}
//The setTimeout() method calls a function
//after a number of milliseconds.
//1 second = 1000 milliseconds.

setTimeout(printfunction1, 1 *1000);
let counter  = 0;
for( var i =0;i<=1000;i++)
{
    counter++;
}
console.log(counter);