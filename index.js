const toggleButton = document.querySelector("#toogleButton");
const active = document.querySelector("#container2");
toggleButton.addEventListener('click', ()=>{
 active.classList.toggle('active1');
 console.log("Hello");
})