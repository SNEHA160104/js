console.log(2==2) // true
console.log(2==3) // false
console.log(2!=3) // true
console.log(2!=2) // false
console.log(2=="2") // true, because == checks for value only and performs type coercion

console.log(2===2) // true
console.log(2==="2") // false, because === checks for both value and type
console.log(2!=="2") // true, because !== checks for both value and type

console.log(5>3) // true
console.log(5<3) // false
console.log(5>=5) // true
console.log(5<=4) // false

console.log(null>0) // false
console.log(null==0) // false
console.log(null>=0) // true, because null is converted to 0 in this comparison,as comparison works differently and converts it to 0

console.log(undefined>0) // false
console.log(undefined==0) // false
console.log(undefined>=0) // false, because undefined is not converted to 0 in this comparison, as comparison works differently and does not convert it to 0