const name="Om"
const repoCount=5

//console.log(name +" " + repoCount+" Value ")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


//another way to declare strings
const gameName=new String("SubWay Suffer")
console.log(gameName[0])
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('f'));//find out the index of character

const newString = gameName.substring(0,3);
console.log(newString);
console.log(gameName.substring(0,5));

const anotherString=gameName.slice(-10,6);
console.log(anotherString);

const newStringOne = "    Om     Jadhao"
console.log(newStringOne);
console.log(newStringOne.trim());//removes spaces from the string from starting and ending

const url = "https://omjadhao.com/om%20jadhao"
console.log(url.replace('%20','-'))//it replaces words from the string

console.log(url.includes('om'))//it returns string is included in string

console.log(gameName.split('ff'))// split the string on the basis of characters









