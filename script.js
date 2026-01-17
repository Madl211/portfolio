// Start immer oben
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Scroll Reveal: Animation immer wieder abspielen
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100 && bottom > 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // entfernt die Klasse, wenn Element außerhalb
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const light = document.body.classList.contains("light");
  toggle.textContent = light ? "☀️" : "🌙";
  localStorage.setItem("theme", light ? "light" : "dark");
});

// Skills Scroll Animation
const skillElements = document.querySelectorAll(".skill");

function animateSkills() {
  skillElements.forEach((skill, index) => {
    const bar = skill.querySelector(".bar div");
    const top = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 50) {
      const percent = bar.getAttribute("data-percent-value");
      setTimeout(() => {
        bar.style.width = percent;
      }, index * 200); // 200ms Verzögerung zwischen Balken
    } else {
      bar.style.width = "0"; // zurücksetzen, wenn Element raus
    }
  });
}

window.addEventListener("scroll", animateSkills);
animateSkills();
