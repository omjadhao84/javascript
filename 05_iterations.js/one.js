//for
/*
for (let i= 0; i<10; i++) {
    const element = i;
    if(element==5){
            console.log("5 is best number")
    }
    console.log(element);
}
*/
/*
for(let i=1;i<=10;i++){
    console.log(i);
    for(let j=1;j<=10;j++){
        console.log(i + "*" +j +"=" + i*j);
    }
}
*/
let myArray=["flash","batman","superman"]
console.log(myArray.length)
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}

//break and continue

for(let i=1;i<=20;i++){
    if(i==5){
        console.log("detected 5")
            break;//its stops the execution
        
    }
    console.log(i);

}