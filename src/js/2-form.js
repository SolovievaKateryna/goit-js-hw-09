const formData = {
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
});