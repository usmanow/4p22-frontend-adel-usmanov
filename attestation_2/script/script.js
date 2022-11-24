'use strict'

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}  

const errorColor = "#EE2424";
const correctColor = "#787878";

const email = document.querySelector('#email')
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm');
const radio = document.querySelector("#form").elements['gender'];
const textarea = document.querySelector("#textarea");
const checkbox = document.querySelector("#checkbox");

function validationEmail() {
    const email = document.querySelector('#email')
    const emailError = document.querySelector('#email-error');
    if (!email.value) {
        email.style.borderColor = errorColor;
        emailError.innerHTML = 'Поле обязательно для заполнения';
        return false;
    }

    if (!validateEmail(email.value)) {
        email.style.borderColor = errorColor;
        emailError.innerHTML = 'Email введён некорректно';
        return false;
    }

    email.style.borderColor = correctColor;
    emailError.innerHTML = '';
    return true;
}

function validationPassword() {
    const passwordError = document.querySelector('#password-error');

    if (!password.value) {
        password.style.borderColor = errorColor;
        passwordError.innerHTML = 'Поле обязательно для заполнения';
        return false;
    }
    
    if (password.value.length < 8) {
        password.style.borderColor = errorColor;
        passwordError.innerHTML = 'Пароль должен содержать не менее 8 символов';
        return false;
    }

    password.style.borderColor = correctColor;
    passwordError.innerHTML = '';
    return true
}

function validationConfirm() {
    const confirmError = document.querySelector('#confirm-error'); 
    if (!confirmPassword.value || password.value !== confirmPassword.value) {
        confirmPassword.style.borderColor = errorColor;
        confirmError.innerHTML = 'Пароли не совпадают';
        return false;
    }

    confirmPassword.style.borderColor = correctColor;
    confirmError.innerHTML = '';
    return true
}
   
const submitButton = document.querySelector('#submit');
function onSubmit(event) {

    event.preventDefault()

    let isEmailValid = validationEmail();
    let isPasswordValid = validationPassword()
    let isConfirmValid = validationConfirm()

    if (isEmailValid && isPasswordValid && isConfirmValid) {
        console.log({
            email: email.value,
            password: password.value,
            confirmation: confirmPassword.value,
            male: radio.value,
            textarea: textarea.value,
            'Я согласен получать обновления на почту': checkbox.checked ? "Согласен" : "Не согласен"
        })
    }
}
submitButton.addEventListener('click', event => onSubmit(event));