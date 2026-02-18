document.addEventListener("DOMContentLoaded", function () {


    let currentPage = window.location.pathname.split("/").pop();
    if (currentPage === "" || currentPage === "/") {
        currentPage = "index.html";
    }
    const links = document.querySelectorAll(".navbar a");
    links.forEach(link => {
        const linkPage = link.getAttribute("href");
        if (!linkPage) return;
        let newLink = linkPage.replace("./", "index.html");
        if (newLink === currentPage) {
            link.style.fontWeight = "bold";
            link.style.pointerEvents = "none";
            link.style.color = "inherit";
            link.style.textDecoration = "none";
        }

    });

});
