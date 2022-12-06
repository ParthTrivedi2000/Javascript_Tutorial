const user = {
    firstName:"Parth",
    // address:{houseNumber:'1234'}
}

console.log(user.address); // will give undefined as address is commented and not exist in user. bt it won't giv any error.
// Bt agr koi  undefined pe bhi agr hm koi key access krne ki try kre then it will give error for example
console.log(user.address.houseNumber);

// Bt wht if I want to prevent the code from this error in the situation of tat key is not present or not exist in the Object
// we can use optional chaining concept as below.

console.log(user?.address); //will give undefined if address is nt there in user object nd prevent from the error.
console.log(user?.address?.houseNumber) //same as above.

// ** Real World Application**

// Sometimes what happens is, like abhi vo property(key) exist kr rhi he bt thodi der bad vo nhi kr rhi he while doing state management in React.
// or ya to abhi vo property exist nhi kr rhi he bt thodi der me ya to next second me krne vali he.
// to aesi situation me hme anyhow error nhi chahiye or hmara code aage execute hona hi chahiye. To hm log Optional Chaining concept ka use kr skte he.

// How optional chaining is preventing errors?
// vo ?. lge hue hone se sbse pehle ye check hoga ki ?. bad likhi hui property available he ki nhi.
// Agr nhi he to vha pe hi JS o/p me undefined de dega. Agr he to aage proceed krk uski value dega.