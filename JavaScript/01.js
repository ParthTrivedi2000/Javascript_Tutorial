console.log("Hello world");

// how to iterate object?

const person = {
    name:'Parth',
    age: 22,
    "my hobbies": ['cricket','chess', 'reading']
}
// --> we have  mainly 2 methods.
// 1) for in loop :-
// --to only fetch keys
//  for (let key in person){
//      console.log(person[key])
//  }
// //  or to fetch key value pair both
// for (let key in person){
//     console.log(`${key}:${person[key]}`)
// }

// 2) Object.keys method :- this method will give the object keys in an array form.
// console.log(Object.keys(person))

// for (let key of Object.keys(person)){
//     console.log(key)
//     console.log(person[key])
// }


// ** computed properties**

// const key1 = 'objkey1';
// const key2 = 'objkey2';

// const val1 = 'myvalue1';
// const val2 = 'myvalue2';

// now the task is to make one object using the above values as keys and values respectively.

// const myObj = {
//     [key1]:val1,
//     [key2]:val2
// }

// console.log(myObj)

// Concept:- To means agr bahar declared koi dusri kew muje object me use krni he to me sirf key:value
// aese nhi likh skta. bt I have to write [key]:value means we have to use square brackets.

// // note :- anything+undefined = Nan (not a number)
// console.log(2+3+undefined)

// ** FUNCTION **
// --> method -1 ) function declaration :-
// function greet(){
//     console.log("Hello there!");
// }

// function sum(number1,number2){
//     return number1+number2;
// }
//  greet()
//  console.log(sum(2,3))

//  method-2) Function Expression

// const greet = function(){
//     console.log("Hello There!");
// }

// const sum = function(number1,number2){
//     return number1 + number2;
// }

// greet()
// console.log(sum(2,9))

// method-3) Arrow functions

// const greet = () => {
//     console.log("Hello there!");
// }

// const sum = (number1,number2) => {
//     return number1+number2;
// }
// or
// const sum = (number1+number2) => number1+number2;
// // greet()
// console.log(sum(6,9))

// Note:- Guess the o/p in below both the cases.
// case-1) 
// parth();
// function parth(){
//     console.log("hello");
// }

// case-2) 
// parth();
// const parth = function (){
//     console.log("hello");
// }

// case-3) 
// parth();
// const parth = ()=>console.log("Hello")

// In all the above cases we have call the function before declaration.
// in 1st case and 2nd case you will get an o/p. bt in 3rd case u won't get o/p.
// So remember one thing, ki jb bhi hm function keyword use krke koi function create krte he to puri file
// me hm log khi pe bhi access kr skte he means function declaration se pehle bhi. Bt that is not the 
// case of arrow function. kyuki arrow function bnate time hmne function keyword use nhi kiya he na
// to ye case me 1st we have to declare function then only we can call it or use it in case of arrow fun.



// ** block scope vs function scope**
// --> let and const are block scope variable. bt var is function scope variable.

// {
//     let name1 = "parth";
//     const name2 = "prashant";
//     var name3 = "param";
// }

// // console.log(name1); // will give error of name1 is not defined.
// // console.log(name2); // same as above
// console.log(name3); // will give o/p.

// // Note:- even here we can declare same name of variable again and it won't give error. for example:
// Note :- bt as we have seen var is functional scope variable it means var declared variable is used once only in whole code.
// and here function means in a JS we can think of whole code as in main function only as similar in other languages.
// let name1 = "sejal"
// console.log(name1)


// // ** Default Parameters**
// // jb pehle ke JS version me Default Parameters vala concept nhi tha tb aese handle krte the.
// const addNum = (a,b) => {
//     if (b===undefined){
//         b=0;
//     }
//     return a+b
// }

// // Bt now we can use default parameters as below.

// const adNum = (a,b=0)=>{return a+b;}


// ** Rest Parameters **

// function nothing(a,b,c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// nothing(2,6,5)

// // Bt now I want that 1st value should go in  a, 2nd in b, and all the rest of the arguents shuld go in c as an Array.
// function something(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// something(2,5,9,4,1,6,7,0,83,87)

// function add(...numbers){
//     let total = 0;
//     for (let num of numbers){
//         total = total+num;
//     }
//     return total;
// }

// console.log(add(3,9,4))



// **Param Destructuring**
// in case of object, it is being used a lot. and in react also it is widely used.
// const newperson = {
//     firstname:"Parth",
//     age:22,
//     gender:'male'
// }

// function getDetails({firstname,age,gender}){
//     console.log(firstname);
//     console.log(age);
//     console.log(gender);
// }

// getDetails(newperson)

// ------------------------------------------------------------------------------------------------------

// ** Callback Functions**
// as we know, we can pass anyting to a function (like integer,string,array,objects etc...). Bt can we pass a function to other function?

// function myNewFunc(name){
//     console.log(`inside a myNewFunc`);
//     console.log(`your name is ${name}`);
// }

// // function myFunc(anyFunction){
// //     anyFunction();
// // }

// // myFunc(myNewFunc("parth"));

// // bt generally convention is, whenever we will pass function inside a function , we will use the callback as a parameter so.

// function myFunc(callback){
    // callback("Parth");  // at the time of call, specify the arguments also if it has. as shown in this line.
// }

// myFunc(myNewFunc)


// **Function returning a function**

// function myFunc(){
//     function urFunc(){
//         return "I m inside urFunc";
//     }
//     return urFunc();
// }

// console.log(myFunc());

// // or

function myFunc(){
    return function urFunc(){
        return "I m inside urFunc";
    };
}

const mine = myFunc();
console.log(mine())

// Note :- remember any of the above 2, callback(i.e. other function as an input) or function returning another function are know as higher order functions.




// **Creating your own Methods**  , ** This keyword** :-

// First of all what is method? 
// --> Method is function inside Object.

// const newPerson = {
//     firstName:"Parth",
//     age:22,
//     about:function(){
//         console.log(`person name is parth and age is 22.`);
//     }
// }

// newPerson.about(); // will give the output.
// Bt now I m changing the person name from Parth to Prashant. nd again printing the o/p.
// Still my output is same as I have hardcode the value of name to Parth and age to 22. So it won't reflect in about method as we are changing the value of firstName and age.
// if u try with ${firstName} and ${age}, it will give error. bec name and age are not defined inside
// the function.

// So how to do it?
// --> we can do it using this keyword.

const newPerson = {
    firstName:"Parth",
    age:22,
    about:function(){
        console.log(`person name is ${this.firstName} and ${this.age} is 22.`);
    }
}

newPerson.about();

// this ki value hme tb nhi pta lgti jb hm code likhte he. Bt tb pta lgti he jb hm code ko run krte he. inshort runtime pe pta lgti he.
// M imp :- this kya h?
// --> this vo object he ya to vo object ko represent kr rha he jo ye function (ya method) ko call kr rha he.
// for example in above case, newPerson is the object who is calling the about() function kyuki .about() se pehle newPerson likha he so newPerson object is calling about function.
// So in above case this keyword stand for newPerson object or it represent ye pura ka pura newPerson object.


// **Ek imp note about **this keyword** which can be asked in interview**

// agr aap empty file me this ko print krne ki try kroge, then wht it will return?
console.log(this) // will return window object
// or
console.log(window) // will return same o/p as above
// or
this === window // will return true only.
// or
function userInfo(){
    console.log(this);
}
userInfo(); //will return same o/p as above. and u can see in console that userInfo and function is created and presents in window object.

// to sirf kehne ka mtlb yhi he ki yha pe bhi this represent object bt yha pe pure window object ko represent krta he.
// bt if u use "use strict" in the file then o/p of above will be undefined. see below example.
// "use strict"
// function userInfo(){
//     console.log(this);
// }
// userInfo();