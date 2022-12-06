// const user1 = {
//     firstName:"Parth",
//     lastName:"Trivedi",
//     email:"parthtrivedi@gmail.com",
//     age:21,
//     address:"Bunglow number,Road,Pincode,State",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18:function(){
//         return this.age>=18;
//     }
// }

// So I have above one user and it's information. But now I have millions of user and it's information.
// So how to deal with them. We can create object for each user and store information same as above but 
// it will become tedious task to create Objects for 1 million users manually.
// So what we can do is we can create a function which can create object and store information which
// we have passed  as an argument.

// function (which create object)
//-->add key value pair for respective information
// --> Object ko return krega

// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age =age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old.`
//     };
//     user.is18 = function(){
//         return this.age>=18;
//     }
//     return user;
// }

// now our function is ready to create object for multiple user. let's try to create user objects.

// const user1 = createUser("Parth","Trivedi","parthtrivedi@gmail.com",21,"my address");
// console.log(user1);
// const is18 = user1.is18();
// const about = user1.about();
// console.log(is18);
// console.log(about);

// const user2 = createUser("Prashant","Trivedi","parthtrivedi@gmail.com",21,"my address");
// const user3 = createUser("Param","Trivedi","parthtrivedi@gmail.com",21,"my address");

// So the function is creating objects as per our need. So it's working fine. Then what is the problem in it?
// The problem is 1st user ke liye meri memory me object ke sath sath about and is18 method bne, fir 2nd user ke liye bhi bne
// similarly we have millions user. to sare user ke liye dono methods bnte rhenge and memory fill hoti rhegi.
//  Bt actually vo methods muje ek hi bar bnane he kyuki vo same hi information provid kete he different users ke liye
// means to muje sare user ke liye alg alg method bnane ki jarurat nhi he.
// So now my motive is to create methods only one time and want to impelement for all the users.

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age =age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// So what we have done is we have created seperate object for the methods So it is stored in memory.
// Now we can just pass the reference of that stored methods. so that whenever JS executes program 
// and come to line 76 nd 77, it will not create new methods bt jst go to the methods memory location through reference and call it. 
// now again u can create different bjects and u can see proper output by printing it on the console.

// So it's working fine. Bt still there is an issue in above code. Wht is it?

// Suppose muje ek or method add krni he jo sare use ke object bne usme implement honi chahiye.
// To me kya krunga ki userMethods ke ander vo likh dunga and vhi same thing createUser function me 
// user.methodname = userMethods.methodname aese likh dunga to mere final object jo create hoga usme ye method 
// bhi implemented milegi. But socho suppose mere pass 1000s methods he jo muje implement krni he sare users ke liye.
// To muje vo 1000 methods dono jgh likhni pdegi userMethods object me and createUser function me. But us time
// pe aesa ho skta he ki me koi methods createUser function me likhna bhul jau ya to glti se alg name likh du
// ya kuch bhi due to manual writing those methods.

// So the solution is we can set proto. So that method ek hi time create ho or jb bhi dusre object ki
// bari aaye tb agr vo methods already bni hogi to usko directly call hi kr denge. 
// So proto set krne ke liye jt new empty object dusri metod se bnana he. for more information about proto pls check proto.js

// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old.`
//     },
//     is18 : function(){
//         return this.age>=18;
//     }
// }

// function createUser(firstName,lastName,email,age,address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age =age;
//     user.address = address;
//     // user.about = userMethods.about;
//     // user.is18 = userMethods.is18;
//     return user;
// }

// So abhi hmne upr kya kiya he ki ek seperate object bnaya memory me or usme sare methods store kr diye jo hme functions se attach krne the.

// Bt aesa kyu krna he? I mean jb hm function create krte he to sath me ek prototype(for more information about prototype, pls check prototype.js file) hme already milta h n..
// to hm memory me alg object bnane ki bjaye vo prototype hi use kr skte he key value pair add krne ke liye.

// function createUser(firstName,lastName,email,age,address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age =age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// };
// createUser.prototype.is18 = function(){
//     return this.age>=18;
// };

// And abhi jese hi upr vala program run kroge to ek error milegi. userMethods is not defined.
// So hmne userMethods as a proto set kiya tha. ta ki JS vha pe jake bhi properties find(or search) kr ske.
// To vhi means abhi hmne userMethods object nikal ke function ke prototype object ka use kiya he.
// to as a proto bhi hme vo prototype hi rkhna hoga. So see below code

// function createUser(firstName,lastName,email,age,address){
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age =age;
//     user.address = address;
//     return user;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// };
// createUser.prototype.is18 = function(){
//     return this.age>=18;
// }

// const user1 = createUser("Parth","Trivedi","parthtrivedi@gmail.com",21,"my address");
// const user2 = createUser("Prashant","Trivedi","parthtrivedi@gmail.com",21,"my address");
// const user3 = createUser("Param","Trivedi","parthtrivedi@gmail.com",21,"my address");

// console.log(user1);
// console.log(user1.is18());


// we will modify above code with "new" keyword. Pls check New Keyword.js file for more information.

// function createUser(firstName,lastName,email,age,address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age =age;
//     this.address = address;
// }
// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old.`
// };
// createUser.prototype.is18 = function(){
//     return this.age>=18;
// }

// const user1 = new createUser("Parth","Trivedi","parthtrivedi@gmail.com",21,"my address");
// const user2 = new createUser("Prashant","Trivedi","parthtrivedi@gmail.com",21,"my address");
// const user3 = new createUser("Param","Trivedi","parthtrivedi@gmail.com",21,"my address");

// console.log(user1);
// console.log(user1.is18());

// One more convention we are following while we use new keyword. It is jst convention not compulsion.
// Actually developer ne new keyword ke hisab se function bnaya he. Bt jo bhi dusra developer ya koi person
// jb bhi ye function ko call krega tb use kese pta chlega ki muje new keyword lga ke call krna he ya normal tarike se.
// So iske liye hm log convention use krte he. Jese developer agr btana chahta he ki ye function aapko
// new keyword use krke call krna he to vo function bnate time first letter capital rkhenge.
// So same thing we need to do in our code.

function CreateUser(firstName,lastName,email,age,address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age =age;
    this.address = address;
}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`
};
CreateUser.prototype.is18 = function(){
    return this.age>=18;
}

const user1 = new CreateUser("Parth","Trivedi","parthtrivedi@gmail.com",21,"my address");
const user2 = new CreateUser("Prashant","Trivedi","parthtrivedi@gmail.com",21,"my address");
const user3 = new CreateUser("Param","Trivedi","parthtrivedi@gmail.com",21,"my address");

console.log(user1);
console.log(user1.is18());

// One more thing
// if u try to print the keys of user1
for(let key in user1){
    console.log(key);
}
// it will give u all the user1's key jisme vo prototype ke ander ki keys bhi included he. see the output.

// Bt suppose muje sirf user1 object ki keys hi check krni ho to me hasOwnProperty se check kr skta hu.
// hasOwnProperty lgane se vo true ya false retun kregi.
for (let key in user1){
    if (user1.hasOwnProperty(key)){
        console.log(key);
    }
}