const rootNode = document.getRootNode();
// console.log(rootNode);

// *Child Relationship

// const htmlElementNode = rootNode.childNodes; //will return NodeList of child nodes.
// console.log(htmlElementNode.childNodes); //  o/p:- NodeList(3) [head, text, body]
const htmlElementNode = rootNode.childNodes[0];
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode)

// *Parent Relationship

console.log(headElementNode.parentNode);

// Note :- now as we know ki jo rendering hoti he usme sara HTML use hua hota he. to bich me jo textNdes
// bnaye he vo kyu nhi show ho rhe? To for your kind information text nodes ko browser ne by default
// white-space = normal set kiya he isliye.
// Usko aap <head> tag ke ander <style> tag ke through change kr skte ho for example
// <style>
    //     *{
    //         white-space :pre;
    //     }
    // </style>

// *Sibling Relationship

console.log(headElementNode.nextSibling); // will return textNode (it means empty space and new line)
console.log(headElementNode.nextSibling.nextSibling); // will return bodyElementNode.

// Bt hme ye to nhi pta hoga n ki kha kha pe kitene textNode hoge. to hme vo nhi chaiye or suppose 
// hme direct next sibling element node hi chahiye so that we can use it. for that

console.log(headElementNode.nextElementSibling); // will return bodyElementNode.

// *Task :- suppose task is to fetch h1 heading node first ang go to it's parent node and change it's background.

const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// div.style.color = "#efefef";
// div.style.backgroundColor = "#333"

// const body = h1.parentNode.parentNode;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333"


// IMPORTANT NOTES :-

// 1) we can directly fetch body tag and make changes in body. for example
const body = document.body;
console.log(body);

// 2) We can apply this queryselector etc on any element also. for example
const head = document.querySelector("head");
// console.log(head);
const title = head.querySelector("title");
console.log(title.childNodes);

// 3) And one more thing is suppose yha pe kb se hm log child nodes me tsxtNode (empty line and space)
// bhi fetch kr rhe he. But suppose I want to fetch child nodes without textnode.
const container = document.querySelector(".container");
// console.log(container);
const childs = container.children;
console.log(childs); // returm HTMLCollection