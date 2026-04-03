myarr=[12,3,4,5]
myarr.push(6)
console.log(myarr)
console.log(myarr.pop());
console.log(myarr.unshift(9));
console.log(myarr);
myarr.shift()
console.log(myarr); //removes an element from start

console.log(myarr.includes(0));
console.log(myarr.indexOf(6));

const newarr=myarr.join()

console.log(myarr);
console.log(newarr);
console.log(typeof(newarr)); //join converts this newaraay to string

//slice,splice
console.log("A",myarr);

arr1=(myarr.slice(1,3));
console.log(arr1)

console.log("B",myarr);
arr2=myarr.splice(1,3);//prints the last index as well
console.log("C",myarr)//but splice manipulates the original array as well unlike in a nd b
console.log(arr2)





























