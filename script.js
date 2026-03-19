function iniciar() {
  var form = document.getElementById('newsletterForm');
  var emailInput = document.getElementById('email');
  var field = document.querySelector('.form .field');
  var card = document.querySelector('.card');
  var successView = document.getElementById('successView');
  var successEmail = document.getElementById('successEmail');
  var dismissBtn = document.getElementById('dismissBtn');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var value = emailInput.value.trim();

    if (value === '' || !esEmailValido(value)) {
      field.classList.add('is-error');
      return;
    }

    field.classList.remove('is-error');
    successEmail.textContent = value;
    card.classList.add('hidden');
    successView.classList.remove('hidden');
  });

  dismissBtn.addEventListener('click', function () {
    successView.classList.add('hidden');
    card.classList.remove('hidden');
    emailInput.value = '';
    field.classList.remove('is-error');
  });
}

function esEmailValido(value) {
  var at = value.indexOf('@');
  var dot = value.lastIndexOf('.');
  return at > 0 && dot > at && dot < value.length - 1;
}

window.onload = iniciar;
