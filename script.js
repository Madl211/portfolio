// Dark Mode
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// Reveal Sections (immer wieder)
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".reveal").forEach(el => {
  revealObserver.observe(el);
});

// Skills Observer (immer wieder)
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const bar = entry.target.querySelector(".bar div");
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      bar.style.width = entry.target.dataset.level + "%";
    } else {
      entry.target.classList.remove("active");
      bar.style.width = "0";
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll(".skill").forEach(skill => {
  skillObserver.observe(skill);
});
