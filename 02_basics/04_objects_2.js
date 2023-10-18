const tinderUser=new Object()//siglton object
const tinderUser2={}
//console.log(tinderUser2);

tinderUser.id="543om";
tinderUser.name="OM jadhao"
tinderUser.isLoggedIn=false;

// console.log(tinderUser)
const regularUser={
    email:"regular@gmail.co",
    userfullname:{
            firstname:"Om",
            lastname:"Jadhao"
    }
}
//console.log(regularUser.userfullname.firstname);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1, obj2}
//console.log(obj3);

//const obj3=Object.assign(obj1,obj2);
//const obj3=Object.assign({},obj1,obj2);
//console.log(obj3);
const obj3 = {...obj1, ...obj2}
//console.log(obj3);

const users=[
    {
        name:"om",
        emaild:"om84@gmail.com",
        rollNum:26
    },
    {
        name:"ram",
        emaild:"ram84@gmail.com",
        rollNum:27
    },
    {
        name:"shyam",
        emaild:"shyam84@gmail.com",
        rollNum:55
    },
    {
        name:"mahesh",
        emaild:"mahesh@gmail.com",
        rollNum:56
    }
]

// console.log(users[3].emaild);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//converts into array

// console.log(Object.hasOwnProperty("name"));
const course={
    coursename:"javascript",
    price:"999",
    courseInstructor:"hitesh"
}
//console.log(course.courseInstructor)
const {courseInstructor:instructor}=course//in this we destructure the values from the object
console.log(instructor);

// {
//     name:"OM",
//     coursename:"Javascript",
//     price:"free"
// }
[
    {},
    {},
    {}
]