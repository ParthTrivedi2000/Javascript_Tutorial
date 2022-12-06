const link = document.querySelector('a');
console.log(link.getAttribute('href'));// will return #home becouse #home is there in href attribute.
// Bt I want only home as an o/p. so for that we can do like
console.log(link.getAttribute("href").slice(1)); //will return home
// link.setAttribute('href','htps://www.google.com');
// console.log(link.getAttribute('href'));