function hello(){
    console.log("Hello World");
}
// we can call above function through
hello(); 
//or
hello.call();


// const user1 = {
//     firstName : "Parth",
//     age: 10,
//     about: function(){
//         console.log(this.firstName, this.age);
//     }
// }

// const user2 = {
//     firstName : "Prashant",
//     age: 21
// }

// Now yha pe aesa he ki about method likhi he user1 object me. and user2 me nhi he.
// But abhi muje kya krna he ki user2 ke liye vo about method apply krni he. vo bhi aese nhi ki me about vali method
// uper se copy krke user2 me bhi include krlu aesa nhi krna he. means user1 se borrow krni he.
// means simply th thing is koi dusre object me likhi hui method muje dusre object me call krani he to kese krunga?

// sbse pehle to ek bat yad rkhna ki ye method likhi hui he user1 bject ke ander to us method ko call to user1 object hi kr skta he.
// bt we can aply call method to use that method for other object.

// user1.about.call(user2);

// uper ki line kya bolna chahti he?
// --> uper ki line ka ye meaning he ki jb ye about method run hogi to usme jha khi pe bhi
// "this" keyword aa rha he vo user2 object ko represent krega na ki user1 ko.

// if u didn't give anthing as argumnet in call, then above line give o/p as undefined.
// for example
// user1.about.call(); // o/p:- undefined undefined
// bec we haven't passed anything or we haven't told the JS ki yha pe aapko this keywork ke bdle konsa object use krna he.

// or simply we can do like this also.

function about(){
    console.log(this.firstName, this.age);
}

const user1 = {
    firstName : "Parth",
    age: 10,
    
}

const user2 = {
    firstName : "Prashant",
    age: 21
}

about.call(user2);
about.call(user1);

// or we can even pass the extra arguments also. For example

function about(hobby, favMusician){
    console.log(this.firstName, this.age, hobby,favMusician);
}

about.call(user1,"guitar","Zakir Naik");
about.call(user2,"cricket","Arijit");


// **Apply Method**
// Apply method is same as call. and implementation is also same.
// Bt the only difference between call and apply is, apply me jo extra argument pass krte he vo array form me krni he.
// for example

about.apply(user1,['guitar','atif aslam']);


// **Bind Method**
// it is also similar to above methods. But only thing is bind will return function.
// And that we can store it and use it everywhere.

const func1 = about.bind(user1,"guitar","Neha Kakkar");
func1();


// Most IMP :- ** Don't do this mistake**

const user = {
    firstName:"Parth",
    age:9,
    about: function(){
        console.log(this.firstName,this.age);
    }
}

user.about(); // will give proper output

// bt if I store that function reference only in variable then see wht happens.
const myFunc = user.about;
myFunc(); // will result into undefined. kyuki yha pe hmne directly user.about (i.e. reference only)
// ko hi store kiya he. user.about()(ie. call nhi kiya he).  or this ki value to call krte time i.e. runtime pe decide hoti h n so it is giving this kind of o/p.
// to hme pehle bind krna pdega ki this keyword kisko represent krega otput dete time.see below code.

const urFunc = user.about.bind(user);
urFunc(); //now it will give proper output.


// ** Arrow Functions and This keyword **
// Note:-agr object me as a method bnane ke liye arrow function use krte he to pls yad rkhna ki usme
// this keyword vo surroundings se leta he. Or usme this keyword ek level up ke object ko represent krta he.
// It means parent object ko represent krta he.
// For example:-

const user4 = {
    firstName:"Parth",
    age:21,
    about: ()=>{
        console.log(this.firstName,this.age);
    }
}

user4.about(); //will give undefined
// bec yha pe this keyword he vo user4 ko represent nhi krega bt usse ek level up object ko represent krega
// i.e. yha pe window object ko.
// agr aap call se this keyword ke liye object representation change krna chahoge to bhi nhi hoga. For exa.
user4.about.call(user4);
// To pls ye cheez yad rkhna or sari chezo me bahot hi clear rehna. It can be asked in interview.


// ** Short Syntax **

const newUser = {
    firstName : "Parth",
    age: 10,
    about: function(){
        console.log(this.firstName, this.age);
    }
} 

// Above function can also be written as 

const oldUser = {
    firstName : "Parth",
    age: 10,
    about(){
        console.log(this.firstName, this.age);
    }
}