const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

//Other ways

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})


const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "tohid", email: "tohid@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username: "Owaish", pass: "123"})
        }else{
            reject('Error: something went worng')
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("The Promise is eiter resolved or rejected"))



console.log("async and Promise")

const promiseFive =new Promise(function(resolve, reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username: "KhanOwaish", pass: "321123"})
        }else{
            reject('Error: something went worng')
        }
    },1000)
});
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
    try{
        const response=await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch(error){
        console.log("E: ",error);
    }
}

getAllUsers()


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))