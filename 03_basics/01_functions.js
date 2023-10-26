function myname(){
    console.log("O")
    console.log("M")
    console.log("J")
}

//myname();
// function addTwoNumbers(number1, number2){
//        console.log(number1+number2);

// }
// function addTwoNumbers(number1, number2){
//        let result=number1+number2;
 //             return result; 
//      }
// const result=addTwoNumbers(55,4);

// console.log(result);

function loginUserMessage(username="ram"){
    if(!username){
        console.log("Please enter a username");
            return 
    }
    return `${username} just logged in`
}


//console.log(loginUserMessage("omjadhao"));
console.log(loginUserMessage("jadhao"));