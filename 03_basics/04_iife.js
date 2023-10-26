//Immediately Invoked Function Expressions(IIFE)
(function sample(){
    //named iife
    console.log("Db connected")
})();

( ()=>{
    console.log(`Db Connected by two`);
})();

( (name)=>{
console.log(`my name is ${name}`);
})("Om")