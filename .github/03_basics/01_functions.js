function name(){
    console.log("S")
    console.log("n")
    console.log("e")
    console.log("h")
    console.log("a")
    console.log("a")

}
name()
// console.log(name()); undefined
function add2(a,b){ //a,b parameters
    sum=a+b
    console.log(sum)
    
}
add2(8,"6") //8,a arguments
result=add2(8,"a")
console.log(result) // returns undefined beacuse uptill  now function doesent return anything

 function add_2(a,b){ //a,b parameters
    sum=a+b
    return sum;
    
}
result=add_2(9,8)
console.log(result)//gives result as 17 because thus function returns something
 



function loginmess(username){
    if(username===undefined){
        console.log(`please enter username`)
        return
    }
    return `${username} just logged in`
}
console.log(loginmess("sneha "))
console.log(loginmess(""))
console.log(loginmess())//undefined as o/p with logged in

function calculatecartprice(...n1){ //if you have parameters like val1,val2 then they take first and second values and rest all the values go to n1
    return n1
}
console.log(calculatecartprice(200))
console.log(calculatecartprice(200,400,3000))//will still give 200
console.log(calculatecartprice(200,400,3000))//will give an array after you add rest operator(...)



const user={ //declaring object

    name:"sneha",price:199
}
//passing object to a function
 
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
    
}

handleobject(user) //can directly pass contents of object as well

arr1=[200,300,400,500]
 function arr2ndval(getarray){
    return getarray[1]
 }
 console.log(arr2ndval(arr1)) // or console.log(arr2ndval([100,200,2000])

 