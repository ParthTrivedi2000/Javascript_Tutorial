// querySelector and querySelectorAll hme static list degi.
// getElementsByClassName,TagName etc vali sari methods hme live list degi.

const listItems = document.querySelectorAll(".todo-list li");
const sixthLi = document.createElement("li");
sixthLi.textContent = "item 6";
const ul = document.querySelector(".todo-list");
ul.append(sixthLi);
console.log(listItems);

// To upr hmne kya kiya ki sbse pehle li ke ander ke sare elements fetch kiye. jo ek NodeList of 5 elements mili
// uske bad hmne ek 6th element bnaya or usko hmne vo pacho ke sath append kiya. usse screen pe to vo
// appended item dikh rhi he. but console pe abhi bhi jo NodeList return ho rha he vo 5 ka hi ho rha he
// kyuki hmne NodeList fetch ki he vo qyerySelector vali method se ki he jo hme ek static list hi 
// provide krega. agr uske bdle hm getElementsBySomething vali methods use krke krte to v hme live list
// deta he mtlb usme console me jo nodeList milegi usme bhi appended ya removed items dikhegi.