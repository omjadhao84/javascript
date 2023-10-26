const user={
    username:"om",
    price:555,

    welcomeMessage:function(){
       
        console.log(`${this.username} ,welcome to website`)
        console.log(this)
    }
}
//  user.welcomeMessage()
//  user.username="ram"
//  user.welcomeMessage()

//console.log(this)//{}
// function myuser(){
//     let username="sam"
//     console.log(this.username);
// }
// myuser()

const myuser =()=>{
    let username="ram" 
    console.log(this)
}
myuser()
//*************arrow function*****************/
//()=>{}
const add=(num1,num2)=>{
   return num1+num2;
}
//const addT=(num1,num2)=> (num1+num2)//implicit return 
//no need to be write of return keyword
const addTh=(num1,num2)=>{ return (num1 + num2)};
console.log(addTh(4,5));