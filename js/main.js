// get all elements here 
const closeBtn = document.querySelector(".menuToggle");
const navBar = document.querySelector("nav");
const menu = document.querySelectorAll("nav ul");
const menuLis = document.querySelectorAll("nav ul li");
const menuLisLI = document.querySelector("nav ul > li.active");
const subMenuClass = document.querySelector("nav ul li ul");
const supmenu = document.querySelectorAll("nav ul li ul li");
const topmenu = document.querySelector("nav ul li ul li ul");

// close btn event handling 
closeBtn.addEventListener("click", () => {
    navBar.classList.toggle("navbar");
    closeBtn.classList.toggle("close");
});


// sub menu event handling 
menuLis.forEach((item) => {
   item.addEventListener("click", (e) => {

    menuLis.forEach((li)   => {
        li.classList.remove("active");
    });

    supmenu.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("show-menu");
        });
    });

    e.currentTarget.classList.add("active");
   });
});

