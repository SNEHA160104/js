const name = "sneha"
const repo_count = 10
console.log(name + repo_count + " too low") //this should usually not be preferred

console.log(`my name is ${name} and my repo count is ${repo_count}`) //should use this

//declaring string-another way

const myname = new String("sneha")
console.log(myname)
console.log(typeof (String))
console.log(myname[2]) //string is an object and has key value pairs which can be accessed as such
console.log(myname.blink())
console.log(myname.bold())
console.log(myname.length)
console.log(myname.toUpperCase())
console.log(myname.charAt(3))
console.log(myname.indexOf('a'))
const newstring = myname.substring(0, 3) //no negative values
console.log(newstring)
const anostring = myname.slice(-4, 3)
console.log(anostring)

const url = "https://sneha.com/sneha%20gupta"
url1 = url.replace("%20", "-")
console.log(url1)

name1 = "sn-eh-ag-up-ta"
console.log(name1.split("-", 2))
console.log(myname.padEnd(1, "gupta"))
console.log(myname.padStart(10, "gupta"))
