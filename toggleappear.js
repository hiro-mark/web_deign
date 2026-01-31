const menu = document.getElementsByClassName("menu")[0];
const sidebar = document.getElementsByClassName("sidebar")[0];

menu.addEventListener("click", function () {
  const isOpen = getComputedStyle(sidebar).display !== "none";
  isOpen ? closeMenu() : openMenu();
});

function openMenu() {
  sidebar.style.display = "block";
}

function closeMenu() {
  sidebar.style.display = "none";
}