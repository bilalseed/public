const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

sidebarBtn.addEventListener("click", e => sidebar.classList.toggle("active"));

[...navigationLinks].forEach(navigationLink => {
  navigationLink.addEventListener("click", function () {
    [...pages].forEach(page => {
      if (this.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLink.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
        navigationLink.classList.remove("active");
      }
    });
  });
});