let myHeros=["thor", "spiderman"]

let heroPower= {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spider power is ${this.spiderman}`);
    }
}

Object.prototype.tohid=function(){
   console.log(`Tohid is Present in all objects`);
}

Array.prototype.Hytohid=function(){
    console.log(`Tohid says hello`);
}


heroPower.tohid()
myHeros.tohid()
myHeros.Hytohid()

// heroPower.Hytohid()




// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"tohid".trueLength()
"iceTea".trueLength()