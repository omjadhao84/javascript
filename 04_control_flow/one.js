// //if
// if(false){

// }
// if(true){

// }
// if(2!=3){
//     console.log("executed");
// }
/*
const temp=42;
if(temp<50){
    console.log("temp is less than 50")
}
else{
    console.log("temp is greater than 50")
}
*/

//<,>,<=,>=,==,!=,===,!==
/*
const score=300
if(score>100){
    let power ="fly"
    console.log(`user power:${power}`);
}
console.log(`User Power:`);
*/
// const balance=100;
// if(balance>10)console.log("test"),console.log("test2");

/*
//else if 
const balance=600;
if(balance<500){
    console.log("less than 500")

}
else if(balance>500){
    console.log("greater than 500")
}
else{
    console.log("equal to 500");
}
*/

const userLoggedIn=true;
const debitcard=true;
const loggedInfromEmail=false;
const loggedInFromGoogle=true;
if(userLoggedIn&&debitcard){
    console.log("Allow to buy course")
}
if(loggedInFromGoogle ||loggedInfromEmail){
    console.log("user logged in")
}