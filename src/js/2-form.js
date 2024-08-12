/* const formData = {
    email: '',
    message: '',
};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input[name="email"]'),
    message: document.querySelector('textarea[name="message"]'),
};

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        refs.email.value = parsedData.email;
        refs.message.value = parsedData.message;
    }
});

refs.form.addEventListener('input', handler);

function handler(event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

refs.form.addEventListener('submit', event => {
    event.preventDefault();
    if (refs.email.value === '') {
        console.log('Fill please all fields');
        const input = document.querySelector('.element-form-width');
        refs.email.style.borderColor = 'red';
        refs.message.style.borderColor = '#000';
    } else if (refs.message.value === '') {
        refs.message.style.borderColor = 'red';
        refs.email.style.borderColor = '#000';
    } else {
        console.log('Info:', formData);
        localStorage.removeItem('feedback-form-state');
        refs.form.reset();
        refs.email.style.borderColor = '#000';
        refs.message.style.borderColor = '#000';
    }
}); */


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
    const trimmedMessage = message.value.trim();

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