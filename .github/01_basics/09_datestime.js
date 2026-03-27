let date= new Date()
console.log(date);
console.log(date.toString());
console.log(date.toISOString());
console.log(date.toLocaleString());
console.log(date.toDateString);
console.log(date.toJSON());


console.log(typeof date);
let date1= new Date(2020, 11, 25);// month is 0 indexed,another way to declare date
console.log(date1.toDateString());

let date2= new Date("December 25, 2020");// another way to declare date
console.log(date2.toDateString());

let date3= new Date(1608883200000);// another way to declare date using timestamp
console.log(date3.toDateString());

date4= new Date(2020, 11, 25, 10, 30, 0);// another way to declare date with time
console.log(date4.toString());

let mytimestamp=Date.now();// get current timestamp
console.log(mytimestamp); 
console.log(date.getTime()); // get timestamp from date object,can compare timestamps in crucial events



/////////////////////////////++++++++++++++++++++++++++++//////////////////////
console.log(date.toLocaleString( 'default', {weekday: 'long'})); // get weekday name
