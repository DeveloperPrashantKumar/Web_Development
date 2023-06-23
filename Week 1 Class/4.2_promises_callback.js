const fs = require('fs');
function callback(err,data)
{
    if (err) {
        console.error('Error reading file:', err);
      }
    console.log(data);
}
fs.readFile("./Week 1 Class/a.txt",'utf8', callback);
