function medicine2Get()
{
    console.log("get medicine 2");
    clearInterval(id);
}
function medicine1Get()
{
    console.log("get medicine 1");
    setTimeout(medicine2Get,2000);
}
 setTimeout(medicine1Get,1000);
var counter =1;
function timer(){
    console.log(counter);
    counter+=1;
}
var id = setInterval(timer,1000);
