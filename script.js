// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => document.body.classList.toggle("light"));

// Hero Word Animation + Subtitle + Buttons
window.addEventListener("load", () => {
  const words = document.querySelectorAll(".word");
  words.forEach((w,i) => w.style.animation = `wordIn 0.8s forwards ${i*0.3}s`);
  
  const sub = document.querySelector(".word-sub");
  sub.style.animation = `wordIn 0.8s forwards ${words.length*0.3 + 0.2}s`;

  const buttons = document.querySelector(".hero-buttons");
  setTimeout(() => {
    buttons.style.opacity = 1;
    buttons.style.transform = "translateY(0)";
  }, (words.length*0.3 + 0.5)*1000);
});

// Reveal sections immer wieder
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add("active");
    else entry.target.classList.remove("active");
  });
}, { threshold:0.2 });
document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Skills
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const bar = entry.target.querySelector(".bar div");
    if(entry.isIntersecting) {
      entry.target.classList.add("active");
      bar.style.width = entry.target.dataset.level + "%";
    } else {
      entry.target.classList.remove("active");
      bar.style.width = "0";
    }
  });
}, { threshold:0.4 });
document.querySelectorAll(".skill").forEach(skill => skillObserver.observe(skill));
