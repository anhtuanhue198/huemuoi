document.addEventListener("scroll", function () {
    let nav = document.getElementById("site-header");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
