/*
switch(key){
    case value:
        break;
    case value:
        break;

    defualt:
    break;    

}
*/
const month="jan"
switch(month){
    case 1:
        console.log("jan");
        break;
        
    case 2:
        console.log("feb");
        break;
        
    case 3:
        console.log("march");
        break;
        
    default:
        console.log("default case");
        break;
        
}

//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{}, function(){}

// if(userEmail.length===0){
//     console.log("array is empty")
// }

const emptyObj={}

if(Object.keys(emptyObj.length===0)){
    console.log("Object is empty")
}
//Nullish Coalescing Operator (??):null undefined
let val1;
val1=5??55;
val2=null??4;
val3=undefined??55;
val4=null??undefined??4;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);

//Terniary Operator

//conditon?true:false;
const iceTeaPrice=44;
iceTeaPrice>10?console.log("greater than 10"):console.log("less than 10")