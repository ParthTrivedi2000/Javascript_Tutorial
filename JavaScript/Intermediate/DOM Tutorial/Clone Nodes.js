// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "New Todo";
// ul.append(li);
// ul.prepend(li);

// to upr vala code chlane se kya hoga ki li node he vo ya to only append hogi ya only prepend.
// bt todo item ke dono side nhi add hogi. kyuki mere pass ek hi li he.means li ka ek hi node create hua he so.
// muje ye krna he ki todo item he uske uper bhi ye new todo add hona chahiye or niche bhi.

// To iske liye hm log node ko clone kr skte he. and use kr skte he.
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// const li2 = li.cloneNode();
// li.textContent = "New Todo";
// ul.append(li);
// ul.prepend(li2);
// To uper vale ode se li node ki dusri copy bn gyi he. bt see the o/p. kya hoga ki prepend(li2)
// me sirf li add hua hoga bt li ander bhi hmne element (text: new todo) add kiya tha vo clone nhi hua he.
// to uske liye hm log true likh skte he bracket me. to deep copy bnayega.means uske child elements hoge vo bhi copy hoge. means jo element copy krna he 
// vo to hoga hi bt uske ander jitne bhi elements hoge vo bhi clone ho jayenge nye vale node ke sath.

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "New Todo";
const li2 = li.cloneNode(true);
ul.append(li);
ul.prepend(li2);