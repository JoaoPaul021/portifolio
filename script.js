const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn?.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const cards = document.querySelectorAll(".project-card, .tech-group, .about-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-3px)";
    card.style.transition = "transform 160ms ease, border-color 160ms ease";
    card.style.borderColor = "rgba(110, 168, 254, 0.28)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.borderColor = "rgba(255, 255, 255, 0.09)";
  });
});
