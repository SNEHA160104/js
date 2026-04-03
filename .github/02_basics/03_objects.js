//object  literals
//declaring object

const mysym=Symbol("key1")
const jsuser={
    name:"sneha",
    age:22,
    location:"ballia",
    [mysym]:"mykey1",
    email:"snegcon16@gmail.com",
    isloogedin:false,
    lastloginn:["monday","tuesday"]

    

}
console.log(jsuser.email)
console.log(jsuser["email"]) //two ways to access

console.log(jsuser.mysym)
console.log( typeof(jsuser.mysym))//gives string when mysym not enclosed in square brackets

console.log(jsuser[mysym])
console.log( typeof(jsuser[mysym]))

jsuser.email="sjdnjshd.gmail.com"
console.log(jsuser.email)
//Object.freeze(jsuser)
jsuser.email="sjhd.gmail.com"//it wont change again
console.log(jsuser.email)
console.log(jsuser)

//adding function to object

jsuser.greeting=function(){
    console.log("hello")
}
console.log(jsuser.greeting)
console.log(jsuser.greeting())

jsuser.gret2=function(){
    console.log(`hello , ${this.name}`)
}

console.log(jsuser.gret2())




