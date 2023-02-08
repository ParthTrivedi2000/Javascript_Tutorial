/*
JS is a backward compatible language. 
it means js me aaj se 10 sal purana jo feature tha vo aaj bhi JS me work krega.

JS is not a forward compatible language. 
It means aaj JS me aaye hue nye features 10-15 sal purane ek 
browser (jisne abhi tk browser update nhi Kiya he) unki system me nhi chlenge. 
But the solution of this problem is we have few compilers for JS ( for example Babel) which 
can convert the new version code into the old version code hence old browser users 
can also use new JS features.
*/

// Consol.log() :- to print anything to the console.
// we can use single quote or double quote or backtick.
// Consol.log ("hello world");
// console.log('Hello world');
// console.log(`Hello world`);

// We should always include "use strict" at the top of file to avoid any error in further 
// whole file of code.
"use strict";


// Intro to Variables :-

// variables can store some information
// we can use that information later
// we can change that information later
// Any variable must be declared first before using it. Var keyword is used to declare the variable.

// declaration of a variable:- 
// var firstName = "Harshit";

// use a variable 
// console.log(firstName);

// Next time whenever we use the previous variables, we don't need to write var. 
// Means only first time whenever variable introduced at that time of declaration we have 
// to use var or any other variable declaration keyword.
// change value of variable:-
// firstName = "Mohit";
// console.log(firstName);

// rules for naming variables:-

// 1) you cannot start with number 
// example :- 
// 1value (invalid)
// value1 (valid)
// var value1 = 2;
// console.log(value1);

// 2) you can use only undersore _ or dollar symbol in variable name
// first_name (valid)
// _firstname (valid) 
// first$name (valid)
// $firstname (valid)

// 3) you cannot use spaces 
// var first_name = "harshit"; // snake case writing 
// var firstName = "harshit"; // camel case writing 
// first name (invalid)

// convention 
// start with small letter and use camelCase 

// let keyword :-
// Variable can also be declared by let keyword.
// See notes for difference between var nd let.
// declaration of variable with let keyword 
// let firstName = "harshit";
// firstName = "Mohit";
// console.log(firstName);

// block scope vs funtion scope (covered later)

// Constant values of variables can be declared by const keyword. 
// For constant variables we can't change it's value once one value will be assigned to it
// declaration of constants :- 
// const pi = 3.14;
// console.log(pi);


// Strings :-
// In js strings are immutable.
// String indexing :- it will start from '0'.
// let firstName = "harshitdfjakldsfdf";
//  h    a   r   s   h   i   t 
//  0    1   2   3   4   5   6
// console.log(firstName[0]);

// Few methods for strings :-
// String1.length will return the length
// length of string:-
// firstName.length 
// console.log(firstName.length);
// console.log(firstName[firstName.length-2]);
// last Index : length - 1

// trim() :-
// String1.trim will remove unnecessary spaces from the string. Actually now if we 
// print String1, still it will show old value only. because as discussed strings are 
// immutable so we need to assign any variable. For exa. Let new _ string = string_1.trim()

// slice():-
// String1.slice(start index, end index) will return the string between start index 
// nd end index. Here note that start index will be included nd end index will be excluded. it 
// means string1.slice(2,6) will return the characters 2,3,4,5 from the string1.

// toUpperCase()
// toLowerCase()

// let firstName = "harshit";

// console.log(firstName.length);
// firstName = firstName.trim(); // "harshit"
// console.log(firstName)
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// firstName = firstName.toLowerCase();
// console.log(firstName);

// start index 
// end index

// let newString = firstName.slice(1); // hars
// console.log(newString);


// *Typeof operator :-
// --> Data types (below are the primitive data types of the JS)
// String
// Number (2,3,7.2 etc...)
// Boolean
// Undefined
// Null
// Symbol
// Bigint

// Typeof will give the data type of the value which is stored in that variable. 
// For example typeof variablename (typeof firstname will give string as an output)
// let age = 22; 
// let firstName = "harshit";
// // console.log(typeof age);


// **Convert number to string **
// 22 -> "22"
// Method - 1)
// Let Age = 22
// Age = Age + " "
// Console.log(typeof Age) // o/p:- string

// Method - 2)
// Let Age = 22
// Age = string (age)
// Console.log(typeof Age) // o/p:- string

// **Convert string to number**
// Method - 1)
// Let myStr= "34"
// myStr = +myStr
// Console.log(typeof (myStr)) // o/p:- number

// Method - 2)
// Let myStr= "34"
// myStr= Number (myStr)
// Console.log(typeof (myStr)) // o/p:- number


// **String Concatenation**
// Let str1 = "parth"
// Let str2 = "Trivedi"
// Let fullName = str1 + " " + str2
// Console.log(fullName) // o/p :- parth Trivedi

// let string1 = "17";
// let string2 = "10";
// let newString = +string1 + +string2;
// console.log(typeof newString);

// **Template String**
// Let age = 22
// Let myName= "parth"
// Let aboutMe = "my name is" + myName + "and I m " + age + "years old"

// This will give u proper o/p. Bt bar bar ye + sign lgana and alg se 2 words ke 
// bich me spaces add Krna is a tedious task. So instead we can use template String.
// let aboutMe= ` my name is ${myName} and I m ${age} years old.`
// console.log(aboutMe);


// **Undefined**
// While we have declared the variables bt not assigning values to that variable, nd then check the 
// datatype of that variable using typeof operator, then it will give output as undefined.
// For example
// let age;
// var myage;
// Console.log (typeof age, typeof myage) // o/p :- undefined undefined

// Note :- pls note that we can't do same thing with const. If you try to declare const variable 
// without assigning the value, js will throw error.

// let firstName;
// console.log(typeof firstName);
// firstName = "Harshit";
// console.log(typeof firstName, firstName); 


// **Null**
// Let myVar = null
// Console.log(typeof myVar) // o/p:- null
// Note :- console.log(typeof null) will give the output as object.
// let myVariable = null;
// console.log(myVariable);
// myVariable = "harshit";
// console.log(myVariable, typeof myVariable);
// console.log(typeof null);
// bug , error

// **Bigint**
// Bigint can be used for large numbers or even for small numbers also.
// Till which value, we can store the value in variable of Number datatype:- 
// console.log(Number.max_safe_integer)

// How to store any number as bigint datatype variable.
// let myVar= Bigint (12) or
// let urVar = 135n

// let myNumber = BigInt(12);
// let sameMyNumber = 123n;
// console.log(myNumber);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(myNumber+ sameMyNumber);


// **Boolean & comparison operators**

// >,<,>=,<= etc...are the comparison operators. And it will give the values as Booleans. Either 
// true or false only.
// let num1 = 7;
// let num2 = "7";
// console.log(num1<num2);

// ** == Vs === **
// == Only checks the value in two variables. 
// While === checks the value and datatype also for two variables. For example
// let var1 = 7
// let var2 = "7"
// Console.log( var1 == var2 ) will return true.
// Console.log( var1===var2 ) will return false.

// Note :- nd same difference is applicable for != And !==
// In other languages, == will be used to check both value and datatype.


// **Truthy and falsy **
// Falsy values:-
// null
// undefined
// " "
// 0
// false

// Truthy values :-
// Except above all the values, everything is true and based on conditions.
// truthy :-
// "abc"
// 1, -1


// ** If else**
// Syntax :-
// If ( condition){
// Code line 1;
// Code line 2;
// }
// Else {
// Code line 3;
// Code line 4
// }

// if else condition example:-
// let age = 17;
// if(age>=18){
//     console.log("User can play ddlc");
// }else {
//     console.log("User can play mario");
// }

// let num = 13;
// if(num%2===0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// let firstName= 0;
// if(firstName){
//     console.log(firstName);
// }else{
//     console.log("firstName is kinda empty");
// }






// **Ternery operator**

// Syntax:-
// let var1 = condition ? Action for result is true : action for result is false;

// Example:-
// let age = 4;
// let drink;
// if(age>=5){
//     drink = "coffee";
// }else{
//     drink = "milk";
// }

// console.log(drink);

// Equivalent ternary operator / conditional operator:-
// let age = 3;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);



// **Logical operators**:- And (&&),Or (||)

// Example:-
// let firstName = "arshit";
// let age = 16;

// if(firstName[0] === "H"){
//     console.log("your name starts with H")
// }
// if(age > 18){
//     console.log("you are above 18");
// }

// if(firstName[0] === "H" && age>18){
//     console.log("Name starts with H and above 18");
// }else{
//     console.log("inside else");
// }

// if(firstName[0] === "H" || age>18){
//     console.log("inside if");
// }else{
//     console.log("inside else");
// }



// ** Taking input from user**

// let firstName = prompt("enter your name");
// Note:- pls remember, prompt will always store any value inputted by user as a string only.



// **Nested if else**

// winning number 19 
// 19 your guess is right 
// 17 too low 
// 20 too high 

// let winningNumber = 19;
// let userGuess = +prompt("Guess a number");

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     if(userGuess < winningNumber){
//         console.log("too low !!!");
//     }else{
//         console.log("too high !!!");
//     }
// }



// **if
// else if
// else if
// else if 
// else**

// Example:-
// let tempInDegree = 50;
// if(tempInDegree < 0){
//     console.log("extremely cold outside");
// }else if(tempInDegree < 16){
//     console.log("It is cold outside");
// }else if(tempInDegree < 25){
//     console.log("wheather is okay ");
// }else if(tempInDegree < 35){
//     console.log("lets go for swim");
// }else if(tempInDegree < 45){
//     console.log("turn on AC");
// }else{
//     console.log("too hot!!");
// }
// console.log("hello");

// let tempInDegree = 4;
// if(tempInDegree > 40){
//     console.log("too hot");
// }else if(tempInDegree > 30){
//     console.log("lets go for swim");
// }else if(tempInDegree > 20){
//     console.log("weather is cool");
// }else if(tempInDegree > 10){
//     console.log("it is very cold outside");
// }else{
//     console.log("extremely cold");
// }
// console.log("hello");




// **Switch statement**

// Syntax :-
// let variable = 0;
// Switch (variable name)
// {
// Case (possible variable value1):
//     Action
// Case (possible variable value 2):
//     Action
// Default:
//     Action
// }

// Example :-
// let day = 7; 
// if(day === 0){
//     console.log("Sunday");
// }else if(day ===1){
//     console.log("Monday");
// }else if(day ===2){
//     console.log("Tuesday");
// }else if(day ===3){
//     console.log("Wednesday");
// }else if(day ===4){
//     console.log("Thrusday");
// }else if(day ===5){
//     console.log("Friday");
// }else if(day ===6){
//     console.log("Saturday");
// }else{
//     console.log("Invalid Day");
// }

// let day = 9;
// switch(day){
//     case 0:
//         console.log("Sunday");
//         break; 
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thrusday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Invalid Day");
// }




// **While loop**

// Syntax:-
// While(condition){
// Code line 1
// Code line 2
// }

// Example - 1):-
// 0 se 9 
// dry: don't repeat yourself
// let i = 0; // 1 2 3 4
// while(i<=9){
//     console.log(i);
//     i++;
// }
// console.log(`current value of i is ${i}`);
// console.log("hello");

// Example - 2):- 
// let num = 100;
// let total = 0; //1 + 2 +3
// let i = 0;
// while(i<=100){
//     total = total + i;
//     i++;
// }
// console.log(total);

// let total = (num*(num+1))/2;
// console.log(total);




// **For loop**

// Example - 1):- print 0 to 9

// for(let i = 0;i<=9;i++){
//     console.log(i);
// }
// console.log("value of i is ",i);


//Example - 2):-

// let total = 0;
// let num = 100;
// for(let i = 1; i<=num; i++){
//     total = total + i;
// }
// console.log(total);




// **Do while loop**

// Syntax:-
// do{
// Action;
// } while ( condition )

// Note:- pls note that do while loop ek bar to chlega hi chlega chahe 1st time me hi condition false 
// di he ya to true ho...and agr true he to n+1 times chlega. Where n is the number of times 
// condition will become true.

// while(i<=9){
//     console.log(i);
//     i++;
// }

// let i = 10;
// do{
//     console.log(i);
//     i++;
// }while(i<=9);
// console.log("value of i is ", i);




// **Break keyword**
// Break will stop the execution of loop and come outside the loop.

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         break;
//     }
//     console.log(i);
// }




// **Continue keyword**
// Continue will take the execution to the next iteration.

// for(let i = 1; i<=10; i++){
//     if(i===4){
//         continue;
//     }
//     console.log(i);
// }
// console.log("hello there");






// ***References Types***


// **Arrays** :- 

// Array is an ordered collection of items. (Ordered means it has particular index or we can use 
// indexing concept here aesa).

// Syntax:-
// let arr1 = [different values or items of similar or different datatypes seperated by comma]
// For example:- let arr1 = [1,3.5, "parth", null, undefined, true, [10,20]] 

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
// let fruits = ["apple", "mango", "grapes"];
// let obj = {}; // object literal
// console.log(fruits);
// fruits[1] = "banana";
// console.log(fruits);
// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));

// Note:- in JS, arrays can store different datatypes in a single array structure.

// M.IMP Note:-
// 1) All the reference types are object only in js.
// Reference types:- arrays, objects
// 2) Primitive types:- number, string, Boolean,null, undefined, bigint.
// Console.log (typeof arr1) // o/p:- object
// Console.log(Array.isArray(arr1)) // o/p :- true
// 3) arrays are mutable in JS.




// **Array methods**

// array indexing , array push pop , array shift unshift 

// let fruits = ["apple", "mango", "grapes"];
// console.log(fruits);

// Push :--> will add the element at the last of the structure.
// Arr1.push("banana") will add banana at the last of arr1.
// Pls make note that, here new array will not be created instead value will be added in 
// original array only or we can say same variable only. Which is not the case with any primitive 
// types (as they all are immutable in nature in JS).

// fruits.push("banana");
// console.log(fruits);


// Pop :--> will remove the last element from the structure and return it. (Return it means we can 
// even store it in any other variable or can do anything with it).
// arr1.pop() will remove last element from arr1.
// let poppedElemnt = arr1.pop()
// console.log(poppedElemnt, arr1)
 
// let poppedFruit = fruits.pop();
// console.log(fruits);
// console.log("popped fruits is", poppedFruit);


// Unshift :--> will add the element at the starting of the structure.
// Arr1.unshift("banana") will add banana at the starting of the arr1.

// fruits.unshift("banana");
// fruits.unshift("myfruit");
// console.log(fruits);


// Shift :--> will remove the 1st element of the structure.
// Arr1.shift() will remove the 1st element from the arr1

// let removedFruit = fruits.shift();
// console.log(fruits);
// console.log("removed fruits is ", removedFruit);

// Note :- push/pop are faster than shift/unshift.

// array.includes(item) :- will return true if item or element presents in the array.





// **Primitive types vs reference types** (imp)
// Please watch this topic timestamp from video and make note of it.

// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);
// num1++;
// console.log("after incrementing num1")
// console.log("value of num1 is", num1);
// console.log("value of num2 is", num2);
// So now afer incrementing num1, result of num1 = 7 and num2 = 6 (here iin above case). So
// this thing you must note bec we have used primitive datatype. so for any primitive 
// datatype if 2 variables are pointing to same value then after changing any of those variables,
// it won't affect the value stored in other variable. why? 

// Primitive datatype is stored in stack. bec wo jyada jgh nh lete so. now when we write
// num1 = 4, 4 will be stored inside the stack. then whenver we write num2 = num1, then
// again in stack num2 = 4 will be created and seperately memory is used for that variable in stack.



// reference types :-
// array 
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);
// array1.push("item3");
// console.log("after pushing element to array 1");
// console.log("array1", array1);
// console.log("array2", array2);

// So we have done same thing as above for reference type. Now we are printing output, then 
// arra1 and arra2 will show the same output. it means item3 will be added to both arr1 and arr2.
// So why?

// So pls understand this, in case of reference type, the values will be stored in the heap
// memory and pointer (i.e. arr1 and arr2 (not values, bec values are stored inside heap)) are
// stored in the stack memory. pointer will store the address of the value of the element which
// is in the heap memory. so wht happens is, the value ["item1","item2"] is stored and it's
// address 0x11 is stored in the stack pointed by array1. now when line arry2 = array1 is 
// executed, at that time array2 is created inside the stack and value stored in array2 is also
// 0x11. so if we make change in any of the variable array1 or array2 then it will make change
// in both the variable values.



// **How to make copy of array** ( v. Imp)
// how to clone array 
// how to concatenate two arrays

// So as we have seen above, in case of reference type, jst by writing array1=array2 will not
// at all create new arrray so how to create copy of array or how to clone it? 

// Method - 1) bt this is applicable with small arrays only. bec it is not feasible or not easy to copy
// 100 items array or 1000 items array with this method.
// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// console.log(array1===arry2); // o/p:- false. bec 2 seperate array was created hence.
// array1.push("item3");
// console.log(array1);
// console.log(array2);

// Methd -2) use of slice. u can use slice method to create new array.
// let array2 = array1.slice(0);
// let array2 = array1.slice(0).concat(["item3", "item4"]);

// Method - 3) using [] and concate method
// let array2 = [].concat(array1,["item3", "item4"]);
// [] will create new array and concate elemets.


// Method - 4) Using spread operator.
// ** Spread operator**.        (V. Imp)
// Plse watch this topic timestamp from video and make note of it.
// new way 
// spread operator
// jst write ... and arrayName will copy the array's element into the new array and give it back.
// For example:-
// let array2 = [...array1];

// let oneMoreArray = ["item3", "item4"]
// let array2 = [...array1, ...oneMoreArray];
// array1.push("item3");
// console.log(array1===array2);
// console.log(array1)
// console.log(array2)





// **For loop in array**

// let fruits = ["apple", "mango", "grapes", "banana"];
// for(let i=0; i<=9;i++){
//     console.log(i);
// }
// console.log(fruits.length);
// console.log(fruits[fruits.length-2]);

// let fruits2 = [];
// for(let i=0; i < fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }
// console.log(fruits2);





// **Use const to create array** ( v. Imp)

// const num = 12;
// num = 20; // o/p:- will give error as value of constsnts can not be changed.

// heap memory ["apple", "mango"] 0x11

// const fruits = ["apple", "mango"]; // 0x11
// fruits.push("banana"); // o/p:- will not give error. bt instead it will push the new element
// to the array.
// console.log(fruits);

// So how it works?




// **While loop in array**

// const fruits = ["apple", "mango", "grapes"];
// const fruits2 = [];
// let i = 0;
// while(i<fruits.length){
//     fruits2.push(fruits[i].toUpperCase());
//     i++;
// }
// console.log(fruits2);





// **For of loop in array** (v imp)

// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let fruit of fruits){
//     fruits2.push(fruit.toUpperCase());
// }
// console.log(fruits2);

// for(let i = 0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }





// **For in loop in array**

// const fruits = ["apple", "mango", "grapes", "fruit4", "fruit5"];
// const fruits2 = [];

// for(let index in fruits){
//     fruits2.push(fruits[index].toUpperCase());
// }
// console.log(fruits2);




// **Array destructuring**

// const myArray = ["value1", "value2", "value3","value4"];
// let myvar1 = myArray[0];
// let myvar2 = myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// let [myvar1, myvar2, ...myNewArray] = myArray;
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);
// console.log(myNewArray);


  








// **Objects Reference Type**

// - theory :-
// arrays are good but not sufficient 
// for real world data 
// objects store key value pairs 
// objects don't have index

// - how to create objects :-
// const person = {name:"Harshit",age:22};
// const person = {
//     name: "harshit",
//     age: 22,
//     hobbies: ["guitar", "sleeping", "listening music"]
// }
// console.log(person);


// - how to access properties and data objects:-
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person.hobbies);


// - how to add key value pair to object.
// person["person"] = "male";
// console.log(person);

// Note :- in JS, keys in objects are always strings only.

// - difference between the dot and bracket notation to access object values :-
// If my key contains more than one word i.e. space between 2 words (for example key is my name) so 
// in this case I can't access this kye with dot notation (person.my name --> will give error) . So 
// in this case we can use bracket notation to access the elements. ( Person ["my name"])

// const key = "email";
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }

// console.log(person["person hobbies"]);
// person[key] = "harshitvashisth@gmail.com";
// console.log(person);

// how to iterate object :-
// const person = {
//     name: "harshit",
//     age: 22,
//     "person hobbies": ["guitar", "sleeping", "listening music"]
// }

// 1) for in loop 
// Object.keys 

// for(let key in person){
//     // console.log(`${key} : ${person[key]}`);
//     console.log(key," : " ,person[key]);
// }

// console.log(typeof (Object.keys(person)));
// const val = Array.isArray((Object.keys(person)));
// console.log(val);

// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }


// computed properties :-

// const key1 = "objkey1";
// const key2 = "objkey2";
// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     objkey1 : "myvalue1",
//     objkey2 : "myvalue2",
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// const obj = {};

// obj[key1] = value1;
// obj[key2] = value2;
// console.log(obj);





// **Spread operator in objects**
// Note :- pls download the file 40.js from the source code of this person.

// const array1 = [1, 2, 3];
// const array2 = [5, 6, 7];

// const newArray = [...array1, ...array2, 89, 69];
// const newArray = [..."123456789"];
// console.log(newArray);

// spread operator in objects
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
//   };
//   const obj2 = {
//     key1: "valueUnique",
//     key3: "value3",
//     key4: "value4",
//   };
  
  // const newObject = { ...obj2, ...obj1, key69: "value69" };
  // in case of objects, Spread krte time agr same key dusri bar aa rhi he to most updated value
  // finally present hogi. it means in above case key1 is present in obj2 and obj1 as well. and
  // hmne spread krte time obj2 ke bad obj1 likha he. so obj1 ke key1 ki value finally present hogi.

  // const newObject = { ...["item1", "item2"] };
  // const newObject = { ..."abcdefghijklmnopqrstuvwxyz" };
  // agr hmmne spread krte time koi bhi pura object specify nhi kiya he it means keys specify nhi
  // ki he sirf values hi specify ki he, in that case JS will take from 0 onwards sequence as keys.
  // as shown in above both example. jst try to run it and check.
  // console.log(newObject);





// **Object destructuring**
// Note :- pls download the file 41.js frm src code.

// const band = {
//     bandName: "led zepplin",
//     famousSong: "stairway to heaven",
//     year: 1968,
//     anotherFamousSong: "kashmir",
//   };
  
//   let { bandName, famousSong, ...restProps } = band;
// let { bandName, famousSong, ...restProps } = band;
//   console.log(bandName);
//   console.log(restProps);





// **Object inside arrays**
// very useful in real world applications

// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]
// for(let user of users){
//     console.log(user.firstName);
// }





// **Nested destructuring**

// const users = [
//     {userId: 1,firstName: 'harshit', gender: 'male'},
//     {userId: 2,firstName: 'mohit', gender: 'male'},
//     {userId: 3,firstName: 'nitish', gender: 'male'},
// ]

// const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
// console.log(user1firstName);
// console.log(userId);
// console.log(user3gender);





// **Function**

// Below ways to create function.
// - function declaration
// - function expression
// - arrow function

// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// function sumThreeNumbers(number1, number2, number3){
//     return number1 + number2 + number3;
// }

// Example - 1) Write isEven function.
// input : 1 number,  output : true , false 

// function isEven(number){
//     return number % 2 === 0;
// }
// console.log(isEven(4));

// Example - 2) Write function 
// input : string ,  output: firstCharacter 

// function firstChar(anyString){
//     return anyString[0];
// }
// console.log(firstChar("zbc"));

// Example - 3) Write function 
// input : array, target (number),  output: index of target if target present in array 

// function findTarget(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }
// const myArray = [1,3,8,90]
// const ans = findTarget(myArray, 4);
// console.log(ans);


// function expression :-
// function singHappyBirthday(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// singHappyBirthday();


// const sumThreeNumbers = function(number1, number2, number3){
//     return number1 + number2 + number3;
// }
// const ans = sumThreeNumbers(2,3,4);
// console.log(ans);


// function isEven(number){
//     return number % 2 === 0;
// }
// const isEven = function(number){
//     return number % 2 === 0;
// }
// console.log(isEven(2));

// const firstChar = function(anyString){
//     return anyString[0];
// }

// const findTarget = function(array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }


// arrow functions :-
// const singHappyBirthday = function(){
//     console.log("happy birthday to you ......");
// }

// const singHappyBirthday = () => {
//     console.log("happy birthday to you ......");
// }

// singHappyBirthday();


// const sumThreeNumbers = (number1, number2, number3) => {
//     return number1 + number2 + number3;
// }

// const ans = sumThreeNumbers(2,3,4);
// console.log(ans);


// const isEven = function(number){
//     return number % 2 === 0;
// }

// const isEven = number => number % 2 === 0;
// console.log(isEven(4));


// const firstChar = anyString => anyString[0];
// console.log(firstChar("harshit"));


// const findTarget = (array, target) => {
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }





// **Hoisting**

// hello();

// function hello(){
//     console.log("hello world");
// }
// console.log(hello);
// const hello = "hello world";
// console.log(hello);





// **Functions inside function**

// function app(){
//     const myFunc = () =>{
//         console.log("hello from myFunc")
//     }
    
//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => num1* num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,3));
//     console.log(mul(2,3));
// }
// app();




// **Lexical scope**
// - lexical scope means sbse pehle JS apne inner most function me variable ko find krta he...agr vha 
// pe he to vhi value print kr dega...agr vha pe nhi mila he to vo apne parent function me find krega. 
// Vha pe mil gya to uski value print krega, agr vha pe bhi nhi mila to uske bhi bahar means global 
// scope me check krega. Abhi agr vha mil gya to uski value print kr dega...or agr khi pe bhi nhi mila 
// to finally error dega.





// **Block scope vs function scope**

// let and const are block scope
// var is function scope 

// if(true){
//     var firstName = "harshit";
//     console.log(firstName);
// }
// console.log(firstName);

// function myApp(){
//     if(true){
//         var firstName = "harshit";
//         console.log(firstName);
//     }
//     if(true){
//         console.log(firstName);
//     }
//     console.log(firstName);
// }

// myApp();





// **Default parameters**

// Previously:-
// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

// Now:-
// function addTwo(a,b=0){
//     return a+b;
// }

// const ans = addTwo(4, 8);
// console.log(ans);





// **Rest parameters**

// function myFunc(a,b,...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is`, c);
// }

// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans = addAll(4,5,4,2,10);
// console.log(ans);





// **Param destructuring**
// object 
// so much useful in React 

// const person = {
//     firstName: "harshit",
//     gender: "male",
//     age: 500
// }

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
// }


// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);







// **Callback function**
// **Function returning other function**





// ** Important Array Methods **
// **forEach method**
// **Map method**
// **Filter Method**

// - forEach method :-
// const numbers = [4,2,5,8];

// function myFunc(number, index){
//     console.log(`index is ${index} number is ${number}`);
// }

// numbers.forEach(function(number,index){
//     console.log(`index is ${index} number is ${number}`);
// });

// numbers.forEach(function(number, index){
//     console.log(number*3, index);
// })

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// users.forEach(function(user){
//     console.log(user.firstName);
// });

// users.forEach((user, index)=>{
//     console.log(user.firstName, index);
// })

// for(let user of users){
//     console.log(user.firstName);
// }



// - Map Method :-

// const numbers = [3,4,6,1,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map((number, index)=>{
//     return index;
// });
// console.log(squareNumber);

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// });

// console.log(userNames);



// - Filter Method
// Note:- filter method also take callback function as parameters. Nd most imp thing is callback 
// function of filter method always returns Boolean values only. Means as filter is array method, So 
// jo bhi condition hmne callback function me likhi he vo condition array ke jis bhi elements ke liye 
// true hogi usko ek array k form me return kr dega. 

// const numbers = [1,3,2,6,4,8];

// const evenNumbers = numbers.filter((number)=>{
//     return number % 2 === 0;
// });
// console.log(evenNumbers);



// - Reduce Method :-
 
const numbers = [1,2,3,4,5,10];

// aim : sum of all the numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// }, 100);

// console.log(sum);
// accumulator , currentValue,  return 
// 1               2              3 
// 3               3              6
// 6               4              10
// 10              5              15
// 15              10             25


// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 15000},
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
//     return totalPrice + currentProduct.price;
// }, 0)

// console.log(totalAmount);

// total price      currentValue     return 
// 0                {}                  12000
// 12000            22000                34000
// 34000            15000                49000



// JUST FOR INFORMATION :-
// ASCII TABLE 
//char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90

// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96

// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125





// **Sort method**
// Note:- above all the method forEach,map, filter, etc will not change original array bt it will 
// create new array and return it. Bt sort will change original array itself. 

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// ["5", "9", "1210", "410", "3000"] 
// [53, 57, 49, 52, 51]

// const userNames = ['harshit', 'abcd', 'mohit', 'nitish', 'aabc', 'ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

// const numbers = [5,9,1200, 410, 3000];
// numbers.sort((a,b)=>{
//     return b-a;
// });
// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200,410 
// a-b ---> 790
// a-b ---> postive (greater than 0) ---> b, a
// 410 , 1200

// a-b ---> negative ----> a,b
// 5, 9 ---> -4 
// price lowToHigh HighToLow 
// const products = [
//     {productId: 1, produceName: "p1",price: 300 },
//     {productId: 2, produceName: "p2",price: 3000 },
//     {productId: 3, produceName: "p3",price: 200 },
//     {productId: 4, produceName: "p4",price: 8000 },
//     {productId: 5, produceName: "p5",price: 500 },
// ]

// lowToHigh
// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price
// });

// const highToLow = products.slice(0).sort((a,b)=>{
//     return b.price-a.price;
// });

// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 21},
//     {firstName: "nitish", age: 22},
//     {firstName: "garima", age: 20},
// ]

// users.sort((a,b)=>{
//     if(a.firstName > b.firstName){
//         return 1;
//     }else{
//         return -1;
//     }
// });
// console.log(users);




// **Find Method** 

// const myArray = ["Hello", "catt", "dog", "lion"];

// function isLength3(string){
//     return string.length === 3;
// }

// const ans = myArray.find((string)=>string.length===3);
// console.log(ans);

// const users = [
//     {userId : 1, userName: "harshit"},
//     {userId : 2, userName: "harsh"},
//     {userId : 3, userName: "nitish"},
//     {userId : 4, userName: "mohit"},
//     {userId : 5, userName: "aaditya"},
// ];

// const myUser = users.find((user)=>user.userId===3);
// console.log(myUser);



// **Every method**

// const numbers = [2,4,6,9,10];

// const ans = numbers.every((number)=>number%2===0);
// console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
// ]

// const ans = userCart.every((cartItem)=>cartItem.price < 30000);
// console.log(ans);




// **Some method**

// const numbers = [3,5,11,9];

// kya ek bhi number esa hai jo even hai 
// true 

// const ans = numbers.some((number)=>number%2===0);
// console.log(ans);

// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 22000},
//     {productId: 3, productName: "tv", price: 35000},
//     {productId: 3, productName: "macbook", price: 25000},
// ]

// const ans = userCart.some((cartItem)=>cartItem.price > 100000);
// console.log(ans);




// **Fill Method**
// value , start , end 

// const myArray = new Array(10).fill(0);
// console.log(myArray);

// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5);
// console.log(myArray);



// **Splice Method**
// start , delete , insert 

// const myArray = ['item1', 'item2', 'item3'];

// delete
// const deletedItem = myArray.splice(1, 2);
// console.log("delted item", deletedItem);
// insert 
// myArray.splice(1, 0,'inserted item');
// insert and delete 
// const deletedItem = myArray.splice(1, 2, "inserted item1", "inserted item2")
// console.log("delted item", deletedItem);
// console.log(myArray);





// **Iterables, array like objects**
// Iterables:- iterables vo hote he jiske upar hm log for of loop lga skte he. 
// For example string, array.
// Note:- object is not iterable. Uske upar for of loop lga ke check karna, it will give error.

// const firstName = "Harshit";
// for(let char of firstName){
//     console.log(char);
// }

// const items = ['item1', 'item2', 'item3'];
// for(let item of items){
//     console.log(item);
// }


// Array like object:- array like object vo hote he jinke pass length property he aur jinko hm index 
// se access kr skte he. For example:- String.
// And jese array ke pass kese bahot sare methods hote he for exa. Map, filter, reduce,sort,some,every 
// etc etc. To vo hm log array ke liye hi use kr skte he. Array like objects ke liye applicable nhi he.

// const firstName = "harshit";
// console.log(firstName.length);
// console.log(firstName[2]);





// **Sets**
// Set is also an iterables. Vo array jesa hota h and array ke similar behave krta he.
// Sets (it is iterable)
// store data  
// sets also have its own methods
// No index-based access 
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const items = ['item1', 'item2', 'item3'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(4);
// numbers.add(5);
// numbers.add(6);
// numbers.add(items);
// if(numbers.has(1)){
//     console.log("1 is present")
// }else{
//     console.log("1 is not present")
// }
// for(let number of numbers){
//     console.log(number);
// }
// const myArray = [1,2,4,4,5,6,5,6];
// const uniqueElements = new Set(myArray);
// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }
// console.log(length);