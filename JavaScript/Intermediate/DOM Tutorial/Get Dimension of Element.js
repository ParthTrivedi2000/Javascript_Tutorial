// how to get dimension of an element?
// it means height and width

const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect()// will give al the dimension of section todo.
const info = sectionTodo.getBoundingClientRect().height //will only give height.
console.log(info);