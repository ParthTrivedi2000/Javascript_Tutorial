// Maps is also a key value pair. Then what is the difference between Object Literals (or Objects) and Maps?
// In Objects keys are always --> either string or Symbol only. If you write any number as key, then you can 
// check using typeof. By default it will be changed to string in case of Objects.

// Bt in case of Maps key can not only string but it can be anything like Number,string,array,Object. This is the major difference between Objects and Maps.

const person = new Map(); // creating empty Map. Or this is the way to create Map.
person.set("myName","Parth");
person.set("age",22);
person.set(1,"one");

// Another thing is, in maps we can't access value of key through dot or bracket notation similar in Objects.
// if you try to do like person.myName or person["myName"] --> o/p will be undefined.
// Instead for Maps we have to use get method to fetch the value of particular Key.
console.log(person.get("myName"));

console.log(person.keys()); // it will return all the keys of Map structure.

// Map is an iterable. while Object was not. hence we can apply for of loop on maps (in case of Objects we have applied for in loop as it is not iterable so.)

for (let key of person){
    console.log(key);
}                          // Bt remember one thing, this will return array structure in which each key-value stored.
// So if we want key and value seperately, then we have to use array destructuring concept.(see below)

for (let [key,value] of person){
    console.log(key,value);
}

// Maps stores data in ordered fashion. (while in Objects order is not gurenteed.)
// Duplicate keys are not allowed. (While in Objects it is allowed).

// 2nd Method to create Map.
const Employee= new Map([['firstName','Parth'],['age',22]]);  //inshort we have to use array inside array for assign key value pair.


// ** Real World Example** 

// Suppose we have below Object.
 const person1 = {
     Id:1,
     "firstName":"Parth"
 }
// Now suppose ye user ki or aese similar bahot sare users ki dusri bhi bahot sari information he. Bt vo muje khi or store krni he na ki ye object me.
// So for that
const moreInfo = new Map();
moreInfo.set(person1, {age:8, gender:"male",salary:"50K"})

console.log(person1.Id);

// Nd u can get this information using
console.log(moreInfo.get(person1).gender)