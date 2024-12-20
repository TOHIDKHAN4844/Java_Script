class User{
    constructor (username){
        this.username=username
    }
    LockManager(){
        console.log(`Username is ${this.username}`);
    }

}

class Teacher extends User{
    constructor(username,email, password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new Course was added by ${this.username}`)
    }
}

const chai =new Teacher("Chai", "chai@gmail.com", "123")

chai.addCourse()