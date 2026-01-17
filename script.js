// Fix: immer oben starten
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// Dark Mode
const toggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.onclick = () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  toggle.textContent = light ? "☀️" : "🌙";
  localStorage.setItem("theme", light ? "light" : "dark");
};
