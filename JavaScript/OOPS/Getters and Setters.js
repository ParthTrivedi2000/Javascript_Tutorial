// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age
//     }

//     fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const person1 = new Person("Parth","Trivedi",22);
// console.log(person1);

// To jese ki hme pta he ki agr hm log sirf person1.fullName likhenge to pura
// fullName function console pe print hoga. Bt agr hm log 
// person.fullName() likhenge means last me parenthisis lgayenge to hi vo function
// call hoga or we can say ki vo function ke ander ka sb kuch execute hoga or return me return statement vali cheeza milegi.

// So simply I mean to say is agr koi property he usko hm log directly object.property krke value
// fetch kr skte he jb ki agr koi function ki value pani ho to  Object.method() krke value fetch krte he.

// But agr muje function ko bhi as a property ki trh hi treat krna ho to? means property ki trh hi value 
// get krni ho to kese kre? 
// sirf method ke aage get likh do. isse vo method ko hm log as a property get kr skte he or behave kra skte he.
// see below code

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age
//     }

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const person1 = new Person("Parth","Trivedi",22);
// console.log(person1.fullName); // o/p :- Parth Trivedi

// Now abhi suppose me aesa chahta hu ki agr me person1.fullName = "Prashant Trivedi" kru to
// firstname means Prashant, object ke firstName property me chla jaye and surname he vo 
// object ki property lastName me chli jaye. To iske liye hm Setters ka use kr skte he.
// see below code.

class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    set name(fullName){
        // fullName.split('') // this line split the given string based on space and return array of string parts.
        const [firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("Parth","Trivedi",22);
person1.name('Param Sureliya');