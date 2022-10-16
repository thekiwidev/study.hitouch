const nav = document.querySelector("nav");
const menu = document.querySelector("div.menu");

const header = document.getElementById("header");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  nav.classList.toggle("open");
});

document.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    document.querySelector("nav.navbar").classList.add("active");
    document.querySelector("a.logo").classList.add("active");
    menu.classList.add("active");
  } else {
    header.classList.remove("active");
    document.querySelector("nav.navbar").classList.remove("active");
    document.querySelector("a.logo").classList.remove("active");
    menu.classList.remove("active");
  }
});

// glidejs slider for the testimonials-section

new Glide("#testimonies-slides", {
  type: "carousel",
  startAt: 1,
  perView: 3,
  breakpoints: {
    850: {
      perView: 2,
    },
    500: {
      perView: 1,
    },
  },
  autoplay: 5000 | true,
  hoverpause: false,
}).mount();

// glidejs slider for the Students, Agents, & Schools

new Glide("#platform-slider", {
  type: "carousel",
  autoplay: true,
  hoverpause: true,
  autoplay: 10000 | true,
}).mount();

// glidejs slider for the Students, Agents, & Schools

new Glide("#contact-slides", {
  type: "carousel",
  autoplay: true,
  hoverpause: false,
  autoplay: 3000 | true,
}).mount();
