  document.addEventListener("DOMContentLoaded", () => {
  const contactBtn = document.getElementById("contactBtn");
  const contactForm = document.getElementById("contactme");

  if (contactBtn && contactForm) {
    contactBtn.addEventListener("click", () => {
      contactForm.classList.toggle("show");
    });
  }
});