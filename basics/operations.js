let score="33"
console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)//if we set score as "44aa" it also convert into number but datatype is NaN
                                
console.log(typeof valueInNumber)
console.log(valueInNumber)
//converstions
//"33"--33
//"33aa" -- NaN
// true--1;//false--0
let isLoggedIn=1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)//true


//***************operationsa******************
let value = 3
let negValue = -value
console.log(negValue)

/*
console.log(2+2)
console.log(2*2)
console.log(3/2)
console.log(33%4)
*/
/*
let str1="hello"
let str2 = " Om"
let str3=str1+str2
console.log(str3)
console.log("1"+3)
console.log(3+"3")
console.log("2"+45+44)
console.log(2+3+4+"5")
 
console.log(+false) out;0
*/
 
// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)//it converts null into zero and then compare with zero


//Strict check
// ===
console.log(2==="2");
//it strictly check the values without converting data types 

