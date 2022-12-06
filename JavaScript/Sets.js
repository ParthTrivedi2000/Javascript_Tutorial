// **Sets** :- it is similar to array. It is also an iterable.
// const numbers = new Set();// creating new set
// set ke ander linearly data store hoga. (similar in arrays)

// Difference betweeen array and sets
// Order is not gureenteed. it means ek bar aapne print krvaya uske bad vapis jb print kroge to it might happen ki order change hoke screen pe aaye.
// so index based access is not allowed.
// No duplicate elements allowed. Only unique elements are allowed.

// VERY IMPORTANT NOTE for ineterview:-
const items = [2,5,8,13];
const numbers = new Set();

numbers.add(items);
numbers.add(items); // will give error bec it has been already added.

numbers.add([3,7,9]);
numbers.add([3,7,9]); // this won't give error. ye uper add kr diya uske bad bhi ye add ho jayega.
// reason :- ek bat always yad rkhna ki jb bhi hm [] (square bracket) use krke array create krte he tb 
// koi ek address assign hota he. So in above 1st case jb hmne items array create kiya tha to use ek address
// assign hua tha so vo ek hi array bna tha memory me. or usko hm dusri bar set me add kr rhe the so it will give error.
// Bt in 2nd case hmne [] se ek array bnaya, fir niche vapis [] use krke dusra array bnaya. to vo dono array
// ko memory me alg alg address assign hoga. to hm log set me vo add krenge to error nhi dega.

// How to check weather element present in set or not?
// we can use .has method to check it. it will return true or false.
if (numbers.has(2)){
    console.log("2 is present")
}
else{
    console.log("2 is not present")
}