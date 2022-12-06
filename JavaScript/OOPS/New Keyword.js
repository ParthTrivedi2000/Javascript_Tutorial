function createUser(firstName,age){
    this.firstName = firstName;
    this.age = age;
}

const user1 = new createUser("Parth",21);
console.log(user1);

// So yha pe new keyword hota kya he? or vo krta kya he?

// new keyword 3 kam krega.
// 1) ek empty object {} create krega. nd jo this keyword likha he vo this represents that empty object.
// 2) return that object which is "this". So we don't need to return object seperately.
// 3) sbse important kam hoga vo ye he. ki new keyword automatically ye function ke prototype ko __proto__ se link kr dega
// mtlb createUser.prototype ko as a proto set kr dega.
// means ye line--> const user = Object.create(createUser.prototype);--> ka kam new keyword khud hi kr dega.
// So we don't need to write this line manually.