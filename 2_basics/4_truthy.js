
// Falsy Values

// false,0,-0,BigInt 0n, "" , null, undefined,  NaN

// Truthy Values

// "0"  'false'  " " [] { }  function(){}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??) : null undefined 

let val1;

val1=5??10
console.log(val1);

val1=null??10
console.log(val1);

val1=undefined??10
console.log(val1);

// Terniary Operators

// condition ? true : false

const age=21

age<=18 ? console.log("Age is less or equal to 18") : console.log("Age is more than 18")
