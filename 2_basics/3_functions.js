function addNumbers(no1,no2){
    console.log(no1+no2)
    return no1+no2;
}
const ans=addNumbers(3,5);
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
