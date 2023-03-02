const form = document.querySelector('form');


form.addEventListener('submit', validateForm);

Array.from(form.elements).forEach(elem => elem.addEventListener('input', checkElem));

function validateForm(e) {
    const form = e.target;
    if (!form.checkValidity()) {
        e.preventDefault();

        Array.from(form.elements).forEach(elem => checkElem(elem));
    }
};

function checkElem(e) {
    const elem = (e instanceof HTMLElement) ? e : e.target;
    if (!elem.checkValidity()) {
        if(elem.type == 'checkbox') {
            elem.classList.add('error-message');
        } else {
            elem.nextElementSibling.classList.add('error-message');
        }
    } else {
        if(elem.type == 'checkbox') {
            elem.classList.remove('error-message');
        } else {
            elem.nextElementSibling.classList.remove('error-message');
        }
    }

    if(elem.type === 'password') {
        const selector = (elem.id === 'pass') ? 'cpass' : 'pass';
        const pass2 = document.getElementById(selector);
        
        if(elem.value !== pass2.value) {
            elem.nextElementSibling.classList.add('pass-error-message');
            pass2.nextElementSibling.classList.add('pass-error-message');
        } else {
            elem.nextElementSibling.classList.remove('pass-error-message');
            pass2.nextElementSibling.classList.remove('pass-error-message');
        }
    }
}