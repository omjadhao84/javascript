 //Array
 const arr=[1,2,3,4,5,6]
 const myHeros=["Shaktiman","Nagraj","Hatim"];
 const myarr2=new Array(4,6,7,9);

 //console.log(arr[4]);
  
 //Array methods
 //arr.push(55);//add number into the array
 //console.log(arr);
 //arr.pop();//delete last elements from the array
//console.log(arr)

//arr.unshift(9);//its add element at start and shift all the element by position one
//arr.shift();//it removes first element form the array and shift elements 
//  console.log(arr.includes(9));//it returns false
//  console.log(arr.indexOf(44));//if element is not present it will return -1;

// console.log(arr);
// console.log(myarr2);
// const newArr=myarr2.join()//it converts array into string and assign 
// console.log(newArr);

//slice,splice

console.log("A ",myarr2);
const myn1=myarr2.slice(0,3);//it adds 0 to n-1 elements into the array without changing the actual array
console.log("B ",myn1);
const myn2=myarr2.splice(0,1);
console.log("C ",myn2);
console.log("D ",myarr2);


