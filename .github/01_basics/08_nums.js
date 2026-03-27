const score=400
console.log(score)

const balance=new Number(2000)
console.log(balance);

console.log(balance.toString().charAt(2)) //since it is string you can apply string operations
console.log(balance.toFixed(2))
balance1=290.948794
console.log(balance1.toPrecision(3))
const hundreds=100000000
console.log(hundreds.toLocaleString('en-IN'))
////////////////////////////////MATHS//////////////////////////////////////


console.log(Math)
console.log(Math.abs(-16)) //round,ceil,floor
console.log(Math.random())
console.log(Math.random()*10)
console.log((Math.random()*10)+1)
const min=10
const max=20
console.log(Math.floor(Math.random()*10)+1)//to get values between 1 and so on
console.log(Math.floor(Math.random()*(max-min+1))+min)//to get values above some min value,here 10
