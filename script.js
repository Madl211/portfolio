// Immer oben starten
window.scrollTo(0, 0);

// Scroll Reveal allgemein
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Skills Animation
const skills = document.querySelectorAll(".skill");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add("active");
        const bar = entry.target.querySelector(".bar div");
        bar.style.width = entry.target.dataset.level + "%";
      }, index * 200);
    }
  });
}, { threshold: 0.4 });

skills.forEach(skill => skillObserver.observe(skill));

// Dark Mode
const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
