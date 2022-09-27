const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

const header = document.getElementById("header");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});

// splide slider for the Students, Agents, & Schools

new Splide(".splide", {
  type: "loop",
  // padding: "5%",
  gap: "3%",
  pauseOnHover: (boolean = true),
  flickPower: 600,
}).mount();

document.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    document.querySelector("nav.navbar").classList.add("active");
    document.querySelector("a.logo").classList.add("active");
  } else {
    header.classList.remove("active");
    document.querySelector("nav.navbar").classList.remove("active");
    document.querySelector("a.logo").classList.remove("active");
  }
});
