//  //singleton
//  Object.create

//  //object literals
 const mySym=Symbol("key1");
 const JsUser={
    name:"Omjadhao",
    [mySym]:"mykey1",
    age:22,
    location:"Jaipur",
    email:"omjadhao84@gmail.com",
    "Full Name":"Om Jadhao",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
 }
//  //console.log(JsUser.email);
//  //console.log(JsUser["email"]);
//  //console.log(JsUser["Full Name"]);//we can't perform this operation using .obj
// console.log(JsUser[mySym]);
// JsUser.email="omjadhao@gmail.com";
// console.log(JsUser);
// Object.freeze(JsUser);//after freezing we can't make changes into object
// JsUser.email="ramjadhao";
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js User");

}

console.log(JsUser.greeting());
JsUser.greetingTwo=function(){
    console.log(`Hello JS user,${this.name}`);
}