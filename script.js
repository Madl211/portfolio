// Start immer oben
window.addEventListener("load", () => {
  window.scrollTo(0, 0);
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100 && rect.bottom > 0) {
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

// Skills Tab Switch & Animation
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tab;

    tabBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    tabContents.forEach(tc => {
      if (tc.id === target) {
        tc.classList.add("active");
        animateBars(tc);
      } else {
        tc.classList.remove("active");
        resetBars(tc);
      }
    });
  });
});

function animateBars(container) {
  container.querySelectorAll(".bar div").forEach(bar => {
    const percent = bar.dataset.percentValue;
    bar.style.width = percent;
  });
}

function resetBars(container) {
  container.querySelectorAll(".bar div").forEach(bar => {
    bar.style.width = "0%";
  });
}

// Animate on scroll only bars entering viewport
function animateBarsOnScroll() {
  document.querySelectorAll(".skills .skill").forEach(skill => {
    const bar = skill.querySelector(".bar div");
    const rect = skill.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      bar.style.width = bar.dataset.percentValue;
    }
  });
}

window.addEventListener("scroll", animateBarsOnScroll);
animateBarsOnScroll();

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".lightbox .close");

document.querySelectorAll(".project-img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxImg.style.transform = "scale(0.8)";
    setTimeout(() => lightboxImg.style.transform = "scale(1)", 10);
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", e => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});

