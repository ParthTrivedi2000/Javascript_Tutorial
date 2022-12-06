// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age
//     }

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }

//     set name(fullName){
//         // fullName.split('') // this line split the given string based on space and return array of string parts.
//         const [firstName,lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     eat(){
//         return`${this.firstName} is eating`
//     }

//     isSuperCute(){
//         return this.age<=1;
//     }

//     isCute(){
//         return true;
//     }
// }

const person1 = new Person("Parth","Trivedi",21);
// So upr ke class ke ander jitne bhi methods he vo sari object pe call hoti he.it means object bnane pe hm chla skte he.
// for example console.log(person1.eat())

// Bt hm aesi bhi methods bna skte he jo object pe na chlake class pe hi chle. jisko static methods bolte he.
// see method classInfo in below code.

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    static classInfo(){
        return `this is person class`;
    }

    static desc = "static property";

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set name(fullName){
        // fullName.split('') // this line split the given string based on space and return array of string parts.
        const [firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }

    eat(){
        return`${this.firstName} is eating`
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

// Static method bnane ke liye method ke aage static likhna he.
// Abhi is static method ko object pe call krke dekho. it will give error. for example
console.log(person1.classInfo());

// Bt ye static method he so isko hm class pe lga skte he. for example
console.log(Person.classInfo()); // will give proper output.

// Same static methods ki trh mere pas static properties bhi he. Usko bhi same hm log object se
// call ya means execute nhi kr skte. Bt class pe execute kr skte he. For example

console.log(person1.desc); // will give undefined it means error.
console.log(Person.desc); //will give proper output.