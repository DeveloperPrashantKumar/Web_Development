function isPalindrome(str) {
  var str1 = str.toLowerCase();
  str1 =str1.replace(/[^a-zA-Z0-9 ]/g, '')
  str1 = str1.split(" ").join("");
  console.log(str1);
  var str2 = str1.split("").reverse().join("");
  console.log(str2);
  if(str1 == str2) return true;
  else return false;
  }
  var result = isPalindrome("PrashanttnahsarP!");
  console.log(result);
  
  module.exports = isPalindrome;
