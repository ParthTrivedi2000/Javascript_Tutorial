// suppose muje ye dekhna he ki <section> ko mene kitni classes de rkhi he.
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList) // will return DOMTokenList with classes applied n sectionTodo.

// supppose muje ek class deni he means add krni he sectiontodo ko. So
// sectionTodo.classList.add("bg-dark"); //will add b-dark named class to sectionTodo.

// Now suppose I want to remove class container which already have with sectionTodo.
// sectionTodo.classList.remove("container");

// Now suppose I want to check weather this class is already applied to sectionTodo or not. Or exist or not.
// or means sectionTodo ko ye class di he ki nhi? or sectionTodo ke pas ye class he ki nhi?
// const ans = sectionTodo.classList.contains("container"); // wil give true or false
// console.log(ans);

// Now toggel :- toggle kya krega ki agr vo class already he to usko remove kr dega. or agr nhi he to add kr dega.
// sectionTodo.classList.toggle("bg-dark");
// sectionTodo.classList.toggle("bg-dark");