const account_id=14658
let accountemail="snegcon16@gmail.com"
var accpassword="12345678"
accountcity="Delhi"


accountemail="jjdhidh@gmail.com"
accpassword="125678"
accountcity="bengaluru"
let accstate=
/*
prefer not to use var as it is function scoped and can lead to unexpected behavior.
let and const are block scoped, which means they are only accessible within the block they are defined in. 
const is used for variables that should not be reassigned, while let is used for variables that can be reassigned. 
*/

// account_id=14659
console.log(account_id)
console.table([account_id,accountemail,accpassword,accountcity,accstate])