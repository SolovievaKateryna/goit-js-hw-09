import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', onInput);
form.addEventListener('submit', onSubmit);

const formData = JSON.parse(localStorage.getItem('feedback-form-state')) || {
    email: '',
    message: '',
};

const { email, message } = form.elements;

email.value = formData.email;
message.value = formData.message;

function onInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onSubmit(event) {
    event.preventDefault();

    const { email, message } = event.currentTarget.elements;

    const trimmedEmail = email.value.trim();
    /*const trimmedMessage = message.value.trim();*/

    if (trimmedEmail === '' || trimmedMessage === '') {
        iziToast.error({
            position: 'topRight',
            message: 'Fill please all fields',
            timeout: 5000,
        });
    return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');
    event.currentTarget.reset();

    iziToast.success({
    position: 'topRight',
    message: 'Data sent!',
    timeout: 2500,
    });
}