const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swift by apple'
}

//for in loop
for(const key in myObject){
     console.log(`${myObject[key]} shortcut is for ${myObject[key]}`);
}