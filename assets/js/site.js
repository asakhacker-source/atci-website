
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

const form = document.querySelector('#enquiry-form');
if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const status = document.querySelector('#form-status');
    const name = form.elements.name.value.trim();
    const phone = form.elements.phone.value.replace(/\D/g, '');
    const course = form.elements.course.value;
    const message = form.elements.message.value.trim();

    if (!name) {
      status.textContent = 'Please enter your name.';
      form.elements.name.focus();
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      status.textContent = 'Please enter a valid 10-digit Indian mobile number.';
      form.elements.phone.focus();
      return;
    }

    if (!course) {
      status.textContent = 'Please select an interested course.';
      form.elements.course.focus();
      return;
    }

    const whatsappMessage = `Hello ATCI,

I would like to enquire about admission.

Name: ${name}
Phone: ${phone}
Interested Course: ${course}
Message: ${message}

Website: atci.co.in`;
    const whatsappUrl = `https://wa.me/919890277842?text=${encodeURIComponent(whatsappMessage)}`;
    const whatsappWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (whatsappWindow) whatsappWindow.opener = null;
  });
}

