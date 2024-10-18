// Change Main Image
let img = document.querySelector(".main");
function changeImage(food) {
    img.src = food;
}
// Dark Mode And Light Mode 
let moon = document.getElementById('moon');
moon.onclick = function () {
    moon.querySelector("i").classList.toggle("fa-sun");
    moon.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark-theme")
    if (document.body.classList.contains('dark-theme')) {
        moon.querySelector("i").classList.add("fa-sun")
    }
    else {
        moon.querySelector("i").classList.add("fa-moon")
    }
}
// Get the button
let mybutton = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Function to handle active class on click
document.querySelectorAll(".navbar-nav li a").forEach((link) => {
    link.addEventListener("click", (e) => {
        // Remove active class from the current active link
        document.querySelector(".navbar-nav .active").classList.remove("active");
        // Add active class to the clicked link
        e.target.classList.add("active");
    });
});

// Function to handle active class based on Scroll
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section"); // Adjust the selector to your sections
    let scrollPosition = window.scrollY;

    sections.forEach((section) => {
        let sectionTop = section.offsetTop - 50; // Adjust offset if necessary
        let sectionHeight = section.offsetHeight;
        let sectionId = section.getAttribute("id");

        // Check if the section is in view
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            // Remove active class from the current active link
            document.querySelector(".navbar-nav .active").classList.remove("active");
            // Add active class to the corresponding navbar link
            document.querySelector(`.navbar-nav li a[href*=${sectionId}]`).classList.add("active");
        }
    });
});