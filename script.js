// Start immer oben
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const bottom = el.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    if (top < windowHeight - 100 && bottom > 100) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
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

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.getAttribute("data-tab");

    // Buttons
    tabButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Inhalte
    tabContents.forEach(content => {
      if (content.id === tab) content.classList.add("active");
      else content.classList.remove("active");
    });

    // Force Animation für Tab-Wechsel
    animateSkills(true);
  });
});

// Skills Animation
function animateSkills(force = false) {
  const visibleSkills = document.querySelectorAll(".tab-content.active .skill");

  visibleSkills.forEach((skill, index) => {
    const bar = skill.querySelector(".bar div");
    const percent = bar.getAttribute("data-percent-value");
    const top = skill.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (force) {
      // Tab-Wechsel: immer Animation von 0 bis Prozent
      bar.style.transition = "none";
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.transition = "width 1s ease-in-out";
        setTimeout(() => {
          bar.style.width = percent;
        }, index * 200);
      }, 50);
    } else {
      // Scroll: Balken nur animieren, wenn sichtbar
      if (top < windowHeight - 50) {
        bar.style.transition = "width 1s ease-in-out";
        setTimeout(() => {
          bar.style.width = percent;
        }, index * 200);
      } else {
        // Wenn aus dem Bild gescrollt, wieder zurücksetzen
        bar.style.width = "0";
      }
    }
  });
}

// Scroll Event
window.addEventListener("scroll", () => animateSkills(false));

// Initial trigger
animateSkills(false);
