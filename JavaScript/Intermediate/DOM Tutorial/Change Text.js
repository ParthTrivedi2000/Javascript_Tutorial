// we can have 2 properties which return the text written in that element.

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);
mainHeading.textContent = "This is something else";

console.log(mainHeading.innerText);

// what is the difference between textContent and innerText?

// --> kbhi kbar kya hota he ki kisi ne styling use krke kuch text ya aesa kuch hide bhi kiya hota he
// To textContent he vo sari text de deti he jo abhi screen pr visible he vo (means jo hide nhi ki he) or
// jo hide kr di hoti he vo bhi. Jb ki innerText only visible he vo hi deti he. hide ki hui he usko
// dhyan me nhi leti he or return nhi krti he.
