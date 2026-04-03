const cartoon=["tom","jerry","oggy"]
const disney=["micky","minnie","dobby"]
// cartoon.push(disney)
// console.log(cartoon)//wont combine two  array rather take the whole array as an input
// merged=disney.concat(cartoon)
// console.log(merged)// as push

const allnew=[...cartoon,...disney]//spraed function
console.log(allnew)

const arr2=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_arr2=arr2.flat(Infinity)//spreads out  the elements in array 
console.log(real_arr2)

console.log(Array.from("SNEHA"))
console.log(Array.from({name:"SNEHA"}))



