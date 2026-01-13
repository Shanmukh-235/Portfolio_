// Dark mode toggle
const themeToggle = document.getElementById("theme-toggle");
const themeToggleMobile = document.getElementById("theme-toggle-mobile");
const html = document.documentElement;

// Check for saved theme preference or default to system preference
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  html.classList.add("dark");
} else {
  html.classList.remove("dark");
}

function toggleTheme() {
  html.classList.toggle("dark");
  localStorage.theme = html.classList.contains("dark") ? "dark" : "light";
}

themeToggle.addEventListener("click", toggleTheme);
themeToggleMobile.addEventListener("click", toggleTheme);

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuOpen.classList.toggle("hidden");
  menuClose.classList.toggle("hidden");
});

// Close mobile menu when clicking a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    menuOpen.classList.remove("hidden");
    menuClose.classList.add("hidden");
  });
});

// Navbar background on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add(
      "bg-white/80",
      "dark:bg-gray-900/80",
      "backdrop-blur-lg",
      "shadow-sm",
      "border-b",
      "border-gray-200",
      "dark:border-gray-800"
    );
  } else {
    navbar.classList.remove(
      "bg-white/80",
      "dark:bg-gray-900/80",
      "backdrop-blur-lg",
      "shadow-sm",
      "border-b",
      "border-gray-200",
      "dark:border-gray-800"
    );
  }
});
document.querySelectorAll(".project-card").forEach((card) => {
  const input = card.querySelector(".project-upload");
  const img = card.querySelector(".project-image");
  const label = card.querySelector(".upload-label");
  const remove = card.querySelector(".remove-btn");

  input.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      img.src = reader.result;
      img.classList.remove("hidden");
      label.classList.add("hidden");
      remove.classList.remove("hidden");
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  });

  remove.addEventListener("click", () => {
    img.src = "";
    img.classList.add("hidden");
    label.classList.remove("hidden");
    remove.classList.add("hidden");
  });
});
