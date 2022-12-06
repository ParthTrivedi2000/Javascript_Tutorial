console.log(window.document); console.log(document);  // give o/p in HTML format
console.dir(window.document); console.dir(document);  // give o/p in JS or object format.

// Now hmare pas jitne bhi elements he vo document object ke ander present he. Aur me
// vo sare elements ko ya to koi bhi elements ko fetch ya select kr skta hu. To vo select
// krne ke liye hmare pass bahot methods he. And vo sare methods document object me hi pde he
// jiski help se me koi bhi element fetch kr skta hu.

// ** method - 1) select element using get element by id :-

// prerequisite for this method is, jo bhi element ko me select krna chahta hu uske pas id honi chahiye.

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);

// **Method - 2) select element using query selector.
// const mainHeading = document.querySelector("#main-heading");
const header = document.querySelector(".header");
const navItem = document.querySelector(".nav-item"); //will only return 1st occurance of nav-item class
const navitem = document.querySelectorAll(".nav-item"); //will retun all elements of class nav-item
console.log(navItem);

// even I can select particular id under class also. For example I have one div tag uske ander bahot kuch he
// bt muje vo div ke ander ek h2 tag he vhi chahiye so

const mainHeading = document.querySelector("div.headline h2");
console.log(mainHeading);

// ---------------------------------------------------------------------------------------------------------

// get multiple elements using getElements by class name :-

// jese id is unique for an element. bt there can be many elements with the same class name.
// So to find element by class name we can use getElementsByClassName method. Bt remember
// this method will return Array like object structure. And as we know only array can have
// methods like slice,.map,reduce etc. these methods can not be applicable to array like objects.
// Bt yes certainly we can iterate array like objects. and can get only 1st ele or 2nd or any element. 

// const navItems = document.getElementsByClassName("nav-item"); // return HTMLCollection
// console.log(navItems);
// console.log(navItems[2]);
// console.log(Array.isArray(navItems)); // will return false. which prooves that this method return array like object not aray.


// get multiple elements using querySelectorAll

const navItems = document.querySelectorAll(".nav-item"); //return NodeList
// console.log(navItems);
// console.log(navItems[1]);

// get multiple elements using getElementsByTagName

// const navItems = document.querySelectorAll(".nav-item"); // return HTML Collection