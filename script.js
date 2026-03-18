function iniciar() {
    var form = document.getElementById('newsletter-form');
    var emailInput = document.getElementById('email');
    var field = document.querySelector('.form_field');
    var card = document.querySelector('.card')
    var signUpView = document.getElementById('sign-up-view');
    var successView = document.getElementById('success-view');
    var successEmail = document.getElementById('success-email');
    var dismissBtn = document.getElementById('dismiss-btn');


    form.addEventListener('submit', function (e) {
        e.preventDefault();

        var value = emailInput.value.trim();

        if (value !== '') {
            if (esEmailValido(value)) {
                field.classList.remove('is-error');
                console.log('email valido:', value);
                successEmail.textContent = value;
                signUpView.classList.add('hidden');
                card.classList.add('hidden')
                successView.classList.remove('hidden');

            } else {
                console.log('email invalido', value);
                field.classList.add('is-error');
            }
        } else {
            console.log('campo vacio');
            field.classList.add('is-error');
        }
    });

    dismissBtn.addEventListener('click', function() {
        console.log('formulario reseteado')
        successView.classList.add('hidden');
        signUpView.classList.remove('hidden');
        card.classList.remove('hidden')
        emailInput.value = '';
        field.classList.remove('is-error');

    });
}

function esEmailValido(value)  {
    var at = value.indexOf('@');
    var dot = value.lastIndexOf('.');
    return at > 0 && dot > at && dot < value.length -1;
}

window.onload = iniciar;