const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links");

function aktifkanrawrr() {
    links.classList.toggle("active");

    if (links.classList.contains("active")) {
        hamburger.innerText = "close"
    } else {
        hamburger.innerText = "menu"
    }
}

hamburger.addEventListener("click", () => {aktifkanrawrr()});