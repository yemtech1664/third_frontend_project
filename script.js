let openIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-icon");
let sidemenu = document.querySelector(".menu");
openIcon.addEventListener("click", ()=>{
	sidemenu.classList.add("open");
})

closeIcon.addEventListener("click", ()=>{
	sidemenu.classList.remove("open");
})
console.log(sidemenu)