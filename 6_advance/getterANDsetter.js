class User{
    constructor(email, password){
        this.email=email;
        this.password=password
    }
    
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}tohid`
    }
    set password(value){
                this._password=value
    }
}

const tohid=new User("tohid@.ai1", "abcd")
console.log(tohid.password);
console.log(tohid.email);
