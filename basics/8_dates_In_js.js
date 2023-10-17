//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(typeof myDate);//object

//let myCreateDate = new Date(2023,0,23);//months start from 0--jan
//let myCreatedDate=new Date(2023,0,23,5,6,44);
//console.log(myCreatedDate.toLocaleString());
 let myCreatedDate= new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{weekday:"long"});

