// let a=500;//global scope
// if(true){
//     let a=99;
//     const b=4;
//     var v=5;
//   console.log("inner :",a);
// }
// console.log(a);
// //console.log(b);
// console.log(v);//it shows output as 5 we declare v as variable(var)
 
// for(let i=0;i<array.length;i++){
//     const element = array[i];
// }
function one(){
    const username = "omjadhao"
    function two(){
        const website = "youtube"
        console.log(username)//two() can access one() variables

    }
   // console.log(website);//as website is not available in this scope so we can't use it here
    two();
}
//one();
if(true){
    const username = "om"
    if(username==="om"){
        const website = " youtube";
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

//+++++++++++++++ Interesting +++++++++++++++++
console.log(addone(5));//here we can use it before declaration
function addone(num){
    return num+1;
}


const addTwo=function(num1){
    return num1+2;
}

console.log(addTwo(44));
