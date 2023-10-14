//Primitive

//7 types:String,Number,Boolean,null,undefined,Symbol
//     BigInt
// const score=100 
// const scoreValue=102.3

// const isLoggedIn=false
// const outsideTemp=null;
// let userEmail;

const id=Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId)
const bigNumber = 665445676543467654n

//Reference (Non primitive)
//Array,Objects,Functions
const heros = ["shaktiman","Nagraj","doga"]//data types--object
 let myObj={
    name:"hitesh",
    age:22,
 }//object

 const myFunction=function(){
    console.log("Hello World");
 }

 console.log(typeof myFunction)