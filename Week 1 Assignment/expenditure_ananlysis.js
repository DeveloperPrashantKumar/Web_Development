function calculateTotalSpentByCategory(transactions) {
  let new1 ={};
  for(var i=0;i<transactions.length;i++)  
  {
    let cat = transactions[i].category;
    let amount = transactions[i].price;
    if(new1[cat])// this checks transactions has key in it 
    {
        new1[cat] =new1[cat] amount;//same as new1[cat] = amount
    }
    else new1[cat] = amount;
  }
    return new1;
  }

  
  let transactions = [
    {
      id: 1,
      timestamp: 1656076800000,
      price: 10,
      category: 'Food',
      itemName: 'Pizza',
    },
    {
      id: 2,
      timestamp: 1656105600000,
      price: 20,
      category: 'Food',
      itemName: 'Burger',
    },
    {
      id: 3,
      timestamp: 1656134400000,
      price: 30,
      category: 'Food',
      itemName: 'Sushi',
    }
  ]
  let new2 = calculateTotalSpentByCategory(transactions);
//console.log(new2);

var key1 = Object.keys(new2);
//console.log(key1);
let answer =[];
for(var i=0;i<key1.length;i++)
{
  let result= {
    category : key1[i],
    amountspend : new2[key1[i]]
  }
  answer.push(result);
}
console.log(answer);

  //module.exports = calculateTotalSpentByCategory;