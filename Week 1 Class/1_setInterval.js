var counter =1;
function printCounter()
{
    console.clear();
    console.log(counter);
    counter+=1;
}
setInterval(printCounter, 1000);
//The setInterval() method continues
// calling the function until clearInterval()
// is called, or the window is closed.
//1 second = 1000 milliseconds.