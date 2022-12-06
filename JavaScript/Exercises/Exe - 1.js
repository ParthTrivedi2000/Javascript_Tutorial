// Excercise - 1:-webPage Crawler

// you have to create a variable which is a string containing the text which is a link you are
// interested in.
// You have to fetch aal the links from a given page which containd this text.

// Solution:-
let str = "python"
let links = document.links;
console.log(links)
let href;
Array.from(links).forEach(function(element){
    href= element.href;
    if (href.includes(str)){
        console.log(href);
    }
});