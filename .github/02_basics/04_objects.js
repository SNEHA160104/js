//singleton or declaring object usinng constructor

//const tinderuser=new object()//singleton object

const tinderuser={}//non singleton
tinderuser.id="123abc"
tinderuser.name="syaya"
//console.log(tinderuser);

const user={
    email:"soso@gmail.com",
    fullname:{
        userfullname:{
            firstname:"snehaaa",
            lastname:"gupta"
        }
    }
}
//console.log(user);
console.log(user.fullname);
console.log(user.fullname.userfullname);

const obj1={1:"A",2:"B"}
const obj2={3:"A",4:"B"}


const obj3={...obj1,...obj2}//or object.assign(obj1,obj2)orobject.assign({},obj1,obj2)

console.log(obj3)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))
console.log(Object.entries(tinderuser))



