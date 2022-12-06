class Animal{
    constructor(firstName,age){
        this.firstName = firstName;
        this.age = age
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

// const animal1 = new Animal("tom",2);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isSuperCute());

class Dog extends Animal{

}
// uper likha he uska meaning kya hua?
// to upr hmne extend keyword ka use kiya he. Usse simply hm kya kr skte he ki
// dusre class ka sb kuch ye class ke liye use kr skte he. So as we can see in Dog class we have nothing.
// to bhi agr me uska object bnaunga to usme me Animal class ka constructor apply hoga or sari methods bhi apply hogi.

const tommy = new Dog("tommy",4);
// console.log(tommy);
// console.log(tommy.eat());

// And ha, yha pe jo Dog class he usko sub class, child class, derived class bhi bol skte he
// and Animal class ko parent class bhi bol skte he.