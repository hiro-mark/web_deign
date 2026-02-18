document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navbar");
    if (!nav) return;

    fetch("/navbar.html")
    .then(res => res.text())
    .then(html => {
        nav.innerHTML = html;
        const page = location.pathname.split("/").pop().replace(".html", "") || "index";
        const current = nav.querySelector(`[data-page="${page}"]`);
        if (current) {
            current.classList.add("active");
            current.removeAttribute("href");
        }
    });
});
