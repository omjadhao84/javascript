const score = 400
console.log(score)
const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length);
console.log(balance.toFixed(2));//it adds two decimal after a number

const otherNumber = 23.8785
console.log(otherNumber.toPrecision(3));// it priortirise the 3 num for making the precision

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString("en-IN"))//add quamas according to indian perspective

//****************Maths*********************/
console.log(Math)
console.log(Math.abs(-4));//converts negative num to positive
console.log(Math.round(9.3));
console.log(Math.ceil(4.6));//round up the number into greater 
console.log(Math.min(8,6,5));//returns the min number
console.log(Math.floor(7.5));//returns lower value 
console.log(Math.max(5,6,7,77,88,664,46));//return maximum num

console.log(Math.random());
console.log((Math.random()*10)+1);   
console.log(Math.floor(Math.random()*10)+1)//7

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min)//14


