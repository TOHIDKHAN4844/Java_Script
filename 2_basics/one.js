//Arrays
 
const arr=[1,2,3,4,5]
console.log(arr);

arr.push(6)
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(9)
console.log(arr);

arr.shift(9)
console.log(arr);

console.log(arr.includes(3));
console.log(arr.indexOf(3));

// slice, splice

console.log("A ", arr);

const myn1 = arr.slice(1, 3)

console.log(myn1);
console.log("B ", arr);


const myn2 = arr.splice(1, 3)
console.log("C ", arr);
console.log(myn2);


const arr1=['one','two', 'three', 'four']
const arr2=['five','six','seven'];
const merge=[...arr1,...arr2]

console.log(merge);

console.log(Array.isArray("TohidKhan"))
console.log(Array.from("TohidKhan"))
console.log(Array.from({name:"TohidKhan"}))// interesting


scorel=100
score2 =200
score3 = 300
console.log (Array.of (scorel,score2,score3));