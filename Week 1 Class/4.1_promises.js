function promiseBody(resolve)
{
    setTimeout(resolve,3000);
}

function printthing()
{
    console.log("hello");
}

function medicine1Get()
{
    var answer = new Promise(promiseBody);
    return answer;

}

var medicine = medicine1Get();
medicine.then(printthing);
console.log(medicine);