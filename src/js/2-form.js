const form = document.querySelector('.feedback-form');

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

form.addEventListener('input', event => {
    const { name, value } = event.target;
    formData[name] = value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageTextarea.value = '';
    form.reset();
});