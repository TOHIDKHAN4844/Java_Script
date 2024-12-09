
const JsUser={
    name:"Tohid-Khan",
    age:20,
    location:"Allahabad",
    batch:2022
}
console.log(JsUser.name);
console.log(JsUser["location"]);

JsUser.greeting=function(){
    console.log(`Hello Js-User ${this.name}`);
}
console.log(JsUser.greeting());

const info={
    email:"tohid@gmail.com",
    fullname:{
        username:{
            first:"Tohid",
            last:"Khan"
        }
    }
}
console.log(info.fullname.username.first);

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const obj2={...target,...source}
console.log(obj2);

const returnedTarget = Object.assign(target, source);


console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true

console.log(Object.keys(JsUser));
console.log(Object.values(JsUser));
console.log(Object.entries(JsUser));