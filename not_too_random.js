/*Task
You are given a sample number n. Your task is to generate a number that same as n, and comply with the following rules:

Your result should be a number ;-)

Your result must be random.

There will be a special test that uses a 10 digits sample number to produce 1000 results, and no duplicate results are allowed.

They should have the same number of digits.

That is, if the sample number is 123, your result should also be a 3 digits number.

They should have the same order of parity.

That is, if the sample number is 123, your result should also be a 3 digits number with the order of Odd-Even-Odd. such as 347, 769, 501, etc..

In this kata, digit 0 is considered as even digit. But leading zeros are not allowed.

They should have the same sign.

That is, if the sample number is a negative integer, your result should be a negative integer too.

They should NOT have the same digit at the same index.

That is, if the sample number is 123. The first digit of your result should not be 1; The second digit should not be 2; The last digit should not be 3.*/

function notTooRandom(n){
    let result = [], array = [];
    let negative = n < 0 ? true : false;
    n = n < 0 ? -n : n;
    n += '';
    let firstChar = +n[0];
    
    for (let char of n){
      let array = +char % 2 ? [1, 3, 5, 7, 9] : [0, 2, 4, 6, 8];
      let randomItem;
      do {
        randomItem = Math.floor(Math.random() * 4 );
      } while(array[randomItem] === +char);
        result.push(array[randomItem]);
    }
    
  //check if the first number is 0 and generate new random one 
    if(result[0] === 0){
      array = [2, 4, 6, 8];
      const index = array.indexOf(firstChar);
      if (index > -1) {
        array.splice(index, 1);
      }
      randomItem = Math.floor(Math.random() * 2 );
      result[0] = (array[randomItem]);
    }
  
    let number = +result.join('');
    return negative ? -number : number;

}
