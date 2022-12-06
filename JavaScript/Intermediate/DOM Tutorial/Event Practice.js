const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

for(let btn of allButtons){
    btn.addEventListener("click", function(){
        // btn.style.color = "grey";
        btn.style.color = "grey";
        btn.style.backgroundColor = 'yellow';
    })
}