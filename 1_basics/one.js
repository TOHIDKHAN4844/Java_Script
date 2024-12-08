console.log("TOhid")

const rollNo=2022150
let emailId="tohid3707@gmail.com"
city ="Kota"

console.table([rollNo,emailId,city])

console.log(typeof null) // object
console.log(typeof undefined) // undefined

console.log(2**4) // 2^4

console.log(1+3+"3")//43
console.log("1"+1+3)//113

// Primitive dataType (STACK) string,number, bool, null,undefined BigInt,symbol

//Refrence (non Primitive (HEAP) ) -> Arrays, Objects, Functions

console.log(`Rollno is ${rollNo} and Email ${emailId} city is ${city}`);

let str="salmanKhan"
const newString =str.substring(0,7)
console.log(newString);

const strSlice=str.slice(1,3)
console.log(strSlice);

let str2="  Khan Salman  "
console.log(str2.trim());

let url="https://Google.com/google%20meta"

console.log(url.replace('%20','-hello-'))