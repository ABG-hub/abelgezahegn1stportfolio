
const navbars = document.querySelectorAll(".navbar li a");
function hover(){
    this.classList.add("hhome");
    console.log(this.classList);
}
function out(){
    this.classList.remove("hhome");
    console.log(this.classList);
}
navbars.forEach(navbar => navbar.addEventListener("mouseover",hover));
navbars.forEach(navbar => navbar.addEventListener("mouseout",out));



const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar");
const close =document.querySelector(".close");
menu.addEventListener("click",() => {
    navbar.classList.add("show");
});
menu.addEventListener("mouseover",hover);
menu.addEventListener("mouseout",out);

close.addEventListener("click",() => {
    navbar.classList.remove("show")
})

const icons = document.querySelectorAll(".logo i");

function toggleSize(event) {
    this.classList.toggle("fa-6x", event.type === "mouseover");
    console.log(this.classList);
}

icons.forEach(icon => {
    icon.addEventListener("mouseover", toggleSize);
    icon.addEventListener("mouseout", toggleSize);
});

