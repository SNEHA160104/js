let  name="sneha"
const age=20
var city="ballia"
console.log(name,age,city)

//avoid using var dur to scope issues
console.log(add1(5)) //this will give the rigght value even if it is present before function
function add1(val){
    return val+1
}

add2(5) //this will throw an error due to way of declaration as we have declared inside variablle
const add2=function(val){
    return val+2
}
