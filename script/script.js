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