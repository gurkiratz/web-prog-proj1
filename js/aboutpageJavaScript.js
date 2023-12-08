const form = document.querySelector(".contact-form");
const nameErrorDiv = document.getElementById("nameError");
const emailErrorDiv = document.getElementById("emailError");
const messageErrorDiv = document.getElementById("messageError");
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
    let messages = [];

    if (nameInput.value === '' || nameInput.value == null) {
        messages.push('* Name is required');
        nameErrorDiv.innerHTML = '* Name is required';
    } else {
        nameErrorDiv.innerHTML = '';
    }

    if (emailInput.value === '' || emailInput.value == null) {
        messages.push('* Email is required');
        emailErrorDiv.innerHTML = '* Email is required';
    } else {
        emailErrorDiv.innerHTML = '';
    }

    if (messageInput.value === '' || messageInput.value == null) {
        messages.push('* Message is required');
        messageErrorDiv.innerHTML = '* Message is required';
    } else {
        messageErrorDiv.innerHTML = '';
    }

    if (messages.length > 0) {
        e.preventDefault();
    }
});