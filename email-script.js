/* EmailJS integration - replace placeholders with your EmailJS keys */
// Make sure email.min.js is included in contact.html
(function(){
  if (typeof emailjs !== 'undefined') {
    emailjs.init("ghUzSW1yiP5pE91zM"); // <-- replace with your EmailJS public key
  }
})();

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const statusMessage = document.getElementById('form-status');
  if (!contactForm) return;

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    statusMessage.textContent = 'Sending...'; statusMessage.classList.remove('success','error');
    const payload = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
    };
    emailjs.send('service_nz2iuds', 'template_ujmy3qg', payload)
      .then(() => {
        statusMessage.textContent = 'Message sent successfully!';
        statusMessage.classList.add('success');
        contactForm.reset();
        setTimeout(()=> { window.location.href = 'thankyou.html'; }, 1500);
      }, (err) => {
        statusMessage.textContent = 'Failed to send. Please try again later.';
        statusMessage.classList.add('error');
        console.error('EmailJS error', err);
      });
  });
});
