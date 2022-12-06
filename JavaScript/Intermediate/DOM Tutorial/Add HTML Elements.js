// innerHTML to add html element \\

// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);

// todoList.innerHTML = "<li> New Todo </li>"
// todoList.innerHTML += "<li> New Todo </li>"
// todoList.innerHTML += "<li> Teach Students </li>";

// Now when to use above innerHTML metod to add element and when not to use?
// --> jb bhi nya element add krna ho(for exa. line no:- 7,8) tb ye method bilkul bhi  use nhi krni chahiye.
// kyuki tb browser kya krta he ki 1st Todo ka code bhi render krta he or nya add kiya uska bhi.
// agr vapis koi Todo add kiya to vapis browser existing Todo ka code bhi again re render krega and
// nya vala add kiya he uska bhi. To ad krne ke liye ye method use nhi krni chahiye. kyuki usse performance ka issue aata he.
// To kb use krni chahiye ye method? :- jb hme pura innerHTML content change krna ho means replace krna ho
// (for exam.:- line no 6) tb use kr skte he.

// See below method to use.generally all the developers are using this method.

// const newTodoItem = document.createElement("li");
// // const newTodoItemText = document.createElement("Teach Students");
// // newTodoItem.append(newTodoItemText);
// const todoList = document.querySelector(".todo-list");
// todoList.append(newTodoItem);
// console.log(newTodoItem);

// now even vo text ke liye nya element na bnate to bhi chlta. meanshm log directly aese bhi kr skte he
// newTodoItem.textContent = "Teach Students";
// console.log(newTodoItem);

// So append kya krega ki elemen ko last me add krega. And ha append ki jgh appendChild bhi use kr skte he
// dono me koi difference nhi he. But appendChild purana he and append nya he bs vhi difference he baki same
// hi work krta he.

// similarly prepend he vo starting me add krta he.
// todoList.prepend(newTodoItem);

// we can remove elements also
const todo1 = document.querySelector(".todo-list li");
todo1.remove();
console.log(todo1);

// abhi yha pe hmne elements ek <ul> ke ander add and remove kiye. But suppose <ul> tag e before ya 
// after insert krne ho to
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach Students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);

// One more method is element.insertadjacentHTML
// beforebegin
// afterbegin
// beforeend
// afterend

// const todoList = document.querySelector(".todo-list");
// const newListItem = todoList.insertAdjacentHTML("beforeend","<li> Teach Students </li>");


// Some old methods to support poor Internate Explorer (kyuki usme uper vale nye ek bhi method support nhi krte).
// appendChild, insertBefore, replaceChild,removeChild
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new todo";
const referenceNode = document.querySelector(".first-todo");

// ul.insertBefore(li, referenceNode);
// ul.replaceChild(li,referenceNode);
// ul.removeChild(referenceNode);