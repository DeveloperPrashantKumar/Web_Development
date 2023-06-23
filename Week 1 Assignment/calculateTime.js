

function calculateSum(n)
{
    var num =0;
    var start = Date.now();
    for( var i=0;i<n;i++){num++}
    var timeElapsed = (Date.now() -start)/1000;
    console.log(timeElapsed);
}
calculateSum(100);
calculateSum(100000);
calculateSum(1000000000);