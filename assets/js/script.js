const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btnTop.style.display = "flex";
  } else {
    btnTop.style.display = "none";
  }
});

btnTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
