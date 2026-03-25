 let myname="Sneha"
 let anothername=myname
 anothername="Sneha S"
 console.log(myname)
 console.log(anothername) //primitive data types are stored in stack memory and when we assign a primitive value to another variable, it creates a copy of the value. So, changing one variable does not affect the other.
//if we change anything in anothername, it will not change myname because they are stored in different memory locations,call by value
 let user1={
    email:"snegcongmail.com",
    upi:"snegcon@okaxis "
 }
 let user2=user1
 user2.email="snehas@gmail.com"
 console.log(user1.email)
 console.log(user2.email) //reference data types are stored in heap memory and when we assign a reference value to another variable, it creates a copy of the reference. So, changing one variable affects the other.
//if we change anything in user2, it will change user1 because they are stored in the same memory location, call by reference
