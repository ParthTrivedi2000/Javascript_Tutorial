// this below function can also called constructor bec it is constructing an object so.
// function CreateUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age =age;
//     this.address = address;
// }
// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// };
// CreateUser.prototype.is18 = function(){
//     return this.age>=18;
// }

// const user1 = new CreateUser("Parth","Trivedi","parthtrivedi@gmail.com",21,"my address");
// const user2 = new CreateUser("Prashant","Trivedi","parthtrivedi@gmail.com",21,"my address");
// const user3 = new CreateUser("Param","Trivedi","parthtrivedi@gmail.com",21,"my address");

// So yha pe uper hmne kya kr rhe the ki first of all we have created a constructor, then 
// hmne uske bad vo constructor ke prototype me methods add ki, then
// uske bad hmne new keyword lga ke usko call kiya.
// Bt same thing we can do with Class with more easiness. Bt ha yad rkhna ki
// class ko bhi JS backend me hmne jese upr procedure key vese hi execute kregi. So nothing new in class
// Bt ye to jese dusri languages me hm log class use krte he constructor bnane ke liye, methods add krne
// ke liye to vesi fealing yha pe bhi class use krke le skte he.

class CreateUser{
    constructor(firstName,lastName,email,age,address){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age =age;
        this.address = address;
    }

    // now adding methods similar as in above code
    about(){
        return `${this.firstName} is ${this.age} years old.`
    }
    is18(){
        return this.age>=18;
    }

}

// now calling class with new keyword. Remember one thing class can always be called with new keyword.
// and also one thing is whenever we create object using class, constructor will automatically be called and executed.
// one more thing is agr new nhi lgaya then constructor nhi call hoga.
const user1 = new CreateUser("Parth","Trivedi","parthtrivedi@gmail.com",22,"my address");

console.log(user1);
console.log(Object.getPrototypeOf(user1));

