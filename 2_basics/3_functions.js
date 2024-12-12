
const ans=addNumbers(3,5);

function addNumbers(no1,no2){
    console.log(no1+no2)
    return no1+no2;
}
console.log(ans);

function calculateCartProce(val1,val2,...num){
    return num
}
console.log(calculateCartProce(10,300,20,500,1000));

const JsUser={
    name:"Tohid",
    RollNo:150
}
function handelObject(anyobj){
    console.log(`UserName is ${anyobj.name} and roll no. is ${anyobj.RollNo}.`)
}

handelObject(JsUser);

const addTwoNo=function(no1,no2){
    console.log(no1+no2);
}
addTwoNo(2,4)

const user={
    userName:"Tohid",
    RollNo:150,

    greeting: function(){
        console.log(`${this.userName},welcome to Website.`);
        console.log(this);
    }
}
user.greeting();
user.userName="Khan"
user.greeting();


const addNo=(no1,no2)=>{
    return no1+no2
}
console.log(addNo(3,5));

const noAdd=(no1,no2)=>no1+no2
console.log(noAdd(3,9));

// IIFE imediately Invoked Function Expressions

// ()()

(function chai(name){
    console.log(`DB Connected ${name}`);
})('Tohid'); 

