const accountId = 43556
let accountEmail="omjadhao@gmail.com"
var accountPassword="1235"
accountCity = "Buldana"

//accountId=44//not allowed
console.log(accountCity)
accountEmail = "omjh"
accountPassword="123"
accountCity="Chikhli"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword, accountCity])//for printing table on screen
