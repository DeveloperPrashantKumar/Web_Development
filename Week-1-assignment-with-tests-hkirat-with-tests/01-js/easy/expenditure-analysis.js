/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) 
{
  
  let new1 ={};
  for(var i=0;i<transactions.length;i++)  
  {
    let cat = transactions[i].category;
    let amount = transactions[i].price;
    if(new1[cat])// this checks transactions has key in it 
    {
        new1[cat] =new1[cat]+amount;//same as new1[cat] = amount
    }
    else new1[cat] = amount;
  }
var key1 = Object.keys(new1);
let answer =[];
for(var i=0;i<key1.length;i++)
{
  let result= {
    category : key1[i],
    totalSpent : new1[key1[i]]
  }
  answer.push(result);
}
  return answer;
}


  
module.exports = calculateTotalSpentByCategory;
