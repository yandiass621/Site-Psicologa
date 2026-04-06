function agendar() {
const numero = "5511972153050";
const mensagem = encodeURIComponent("Olá, gostaria de agendar uma consulta.");
window.open(`https://wa.me/${numero}?text=${mensagem}`, '_blank');
}
window.addEventListener('scroll', function () {
const header = document.querySelector('header');

if (window.scrollY > 50) {
header.classList.add('scrolled');
} else {
header.classList.remove('scrolled');
}
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if (scrollY >= sectionTop) {
    current = section.getAttribute("id");
}
});

navLinks.forEach(link => {
link.classList.remove("active");
if (link.getAttribute("href") === `#${current}`) {
    link.classList.add("active");
}
});
});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
const windowHeight = window.innerHeight;

reveals.forEach(el => {
const elementTop = el.getBoundingClientRect().top;

if (elementTop < windowHeight - 100) {
    el.classList.add("active");
}
});
});