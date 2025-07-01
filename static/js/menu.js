const toggleBtn = document.querySelector("#toggle-btn")
const showNavMenu =  document.querySelector(".header__nav")
const nav = document.querySelector(".header__toggle")
const navMenuOption = showNavMenu.querySelectorAll("#nav__menu")
toggleBtn.addEventListener("click",()=>{
    showNavMenu.classList.toggle("active")
    const isActive = nav.classList.toggle("active")
    document.body.classList.toggle("menu-open", isActive); 
})



navMenuOption.forEach((menuOption) => {
    menuOption.addEventListener("click", (e) => {
        navMenuOption.forEach((option) => {
            option.classList.remove("active__page__section");
        });

        e.currentTarget.classList.add("active__page__section");

        showNavMenu.classList.remove("active");
        nav.classList.remove("active");
        document.body.classList.remove("menu-open");
    });
});

// Show/hide scroll-to-top button based on scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) { // Show button after scrolling 50px
        scrollTopBtn.classList.add("visible");
    } else {
        scrollTopBtn.classList.remove("visible");
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});