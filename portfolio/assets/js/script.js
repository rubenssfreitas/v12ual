document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('contactForm');

  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const assunto = document.getElementById('assunto');
  const mensagem = document.getElementById('mensagem');

  const erroNome = document.getElementById('erroNome');
  const erroEmail = document.getElementById('erroEmail');
  const erroAssunto = document.getElementById('erroAssunto');
  const erroMensagem = document.getElementById('erroMensagem');

  // Nome
  nome.addEventListener('input', () => {
    erroNome.classList.toggle('d-none', nome.value.trim().length >= 3);
  });

  // Email
  email.addEventListener('input', () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    erroEmail.classList.toggle('d-none', regex.test(email.value));
  });

  // Assunto
  assunto.addEventListener('input', () => {
    erroAssunto.classList.toggle('d-none', assunto.value.trim().length >= 3);
  });

  // Mensagem
  mensagem.addEventListener('input', () => {
    erroMensagem.classList.toggle('d-none', mensagem.value.trim().length >= 5);
  });

  // Submit
  form.addEventListener('submit', function (e) {
    let valido = true;

    if (nome.value.trim().length < 3) {
      erroNome.classList.remove('d-none');
      valido = false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      erroEmail.classList.remove('d-none');
      valido = false;
    }

    if (assunto.value.trim().length < 3) {
      erroAssunto.classList.remove('d-none');
      valido = false;
    }

    if (mensagem.value.trim().length < 5) {
      erroMensagem.classList.remove('d-none');
      valido = false;
    }

    if (!valido) {
      e.preventDefault(); // BLOQUEIA ENVIO
    }
  });

});


//// SWIPER JS ////

const swiper = new Swiper('.swiper', {
  loop: true,  
  grabcursor: true,
  autoplay: {
        delay: 3000,
        disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',    
  },


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 18
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    // when window width is >= 1188px
    1188: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }

  
});