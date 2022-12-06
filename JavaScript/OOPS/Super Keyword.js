// Now suppose muje sirf dog ki hi koi property add krni he. for exa. speed to me aese krunga. 

class Animal{
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    eat(){
        return`${this.name} is eating`
    }

    isSuperCute(){
        return this.age<=1;
    }

    isCute(){
        return true;
    }
}

class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph.`
    }

}

// Note:- Object is also called Instance.
const tommy = new Dog("tommy",4,35);
console.log(tommy.run());

// So what super keyword doing is ki vo extend ke bad jo class likha he vo means parent class
// me se methods ya properties ya constructor search krne deta he.

// And one more important thing is, agr same name se method ya property ya constructor sub class me available he to 
// vo hi execute hogi. agr sub class me available nhi he to JS parent class me jake check krega
// aur vha mil gyi to execute krega. Or agr nhi mili to error de dega.