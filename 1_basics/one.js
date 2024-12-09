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

const val=123.8966
console.log(val.toPrecision(4));

const hund=100000000000
console.log(hund.toLocaleString('en-IN'))

const min=10
const max=50

// random generate value between 10-20

const random1= Math.random() // (0,1)
const random =random1*(max-min+1)
const nearBY=Math.floor(random)
const between =nearBY+min
console.log(between);