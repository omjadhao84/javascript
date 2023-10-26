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
//console.log(loginUserMessage("jadhao"));

function calculateCartPrice(val1,val2,...num1){
       return num1;
}
//console.log(calculateCartPrice(2,66,77));
const user={
    username:"Om",
    price:44
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);

}
//handleObject(user)
handleObject({
    username:"ram",
    price:33
})
const myNewArray = [200,400,44,33]

function returnSecondValue(getArray){
       return getArray[1];
}
//console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([44,55,66,77,66]));