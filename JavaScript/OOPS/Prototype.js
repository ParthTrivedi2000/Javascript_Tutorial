// So abhi tk hmne funcions ke bare me dekha.
function hello(){
    console.log("Hello World!");
}

hello(); // will give the proper output.

// Bt in JS one more concept is, function can be treated as function also and as an object also. So we can do all those things with function which we can do with any other object.
// This is one of the properties in JS.
// So in JS we can think of function is combo --> function + object.
// For example:- in object we can get the properties through object.key. simiarly
console.log(hello.name); // this will return the name of the funtion.

// you can add your own properties also. for example
hello.myOwnProperty = "this is unique value"; // So jese me object me key value pair add kr rha tha same vese hi yha pe bhi kr rhe he.
console.log(hello.myOwnProperty);

// So as we have seen above
// name property ---> return the function name
// function provides more useful properties.

// In JS jb bhi hm function bnate he to sath me ek object bhi bnta he.
// jisko hm prototype bolte he. bt jb bhi function bnega tb sath me automatic ye prototype (jo ek object he)
// bnega. jisme ek constructore hi store hoga. Bt vo prototype object ke ander hm log hmare object ki trh
// key-value pair add kr skte he. So is trh function as a object bhi treat ho skta he.
// Vo prototype ko aap print bhi kra skte ho. For exaple:-
console.log(hello.prototype);

// as prototype is object of function. to vo object he to uske ander  hm log key value pair bhi add kr skte h.
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function(){
    return "la la la la la la la..."
};
console.log(hello.prototype);

// So M imp. yad rkhna ki Only functions provide prototype property.