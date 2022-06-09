const hamburger = document.querySelector(".hamburger")
const navUl = document.querySelector(".navbar ul")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navUl.classList.toggle("active");
})