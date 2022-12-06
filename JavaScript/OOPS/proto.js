const obj1 = {
    key1:"value1",
    key2:"value2"
}

// const obj2 = {
//     key3:"value3"
// }

// console.log(obj2.key3) // will give proper output.

// console.log(obj2.key1) // o/p:- undefined.

// So JS is giving error or we can say undefined, if that key is not present in that object.
// Bt muje abhi kya chahiye ki agr key3 jo he vo obj2 me nhi he to JS usko obj1 me find kre. Agr vha pe
// he to value retur kre aur nhi he to hi error de.
// So how can we do it?

// So it can be done by setting  __proto__ as obj1 in obj2.

const obj2 = Object.create(obj1); // will create empty object {} nd set proto as obj1.
console.log(obj2);
obj2.key3 = 'value3';
console.log(obj2);

console.log(obj2.key1); // o/p:- value1
// So it's happening. 
// Bt how JS done this in backend?
// const obj2 = Object.create(obj1); So actually what this line is doing?
// this line means that ek empty object create ho. or uska __proto__ set ho jaye obj1. __proto__
// set ho jaye means agr in future koi obj2 me se koi key find krne ki try krta he or usme nhi he
// to JS uske proto me bhi find kregi. or agr usme bhi vo property nhi he to hi error degi.
// Or ha agr key obj2 me hi mil gyi to JS usko hi return krega.
// u can see the proto of that object as shown below.
// console.log(obj2.__proto__);

// Note :- in JS ES6 Documentation __proto__ ko [[prototype]] se bhi denote kiya gya he.
// To yad rkhna ki __proto__ = [[prototype]] hota he. Bt most important thing is prototype bhi also JS ki ek alg property he.
// So in JS prototype and [[prototype]] are very different thing.


// Note:- So There r 2 ways to create empty object.
// 1st) - method :- using empty braces
// const obj = {};

// 2nd) - method :- using create method
// const obj = Object.create(other object name);

// And the difference between abve 2 methods are already described in this file.