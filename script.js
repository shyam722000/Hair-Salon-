

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
  
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // You can customize the alert message here
      alert('Thank you for submitting the form! We will get back to you soon.');
    });
  });
  