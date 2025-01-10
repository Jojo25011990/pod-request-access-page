'use strict';
const formBtn = document.querySelector('.main__content-btn');
const formEmail = document.querySelector('.main__content-email');
const formMessages01 = document.querySelector('.main__content-errorMessage01 ');
const formMessages02 = document.querySelector('.main__content-errorMessage02');

formBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const formEmailValue = formEmail.value.trim().toLowerCase();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // ***  Oops! Please add your email  ***
  if (formEmailValue === '') {
    formMessages01.classList.add('active');
    formMessages02.classList.remove('active');
    formEmail.classList.add('error-outline');
  } else {
    formMessages01.classList.remove('active');

    // ***  Oops! Please check your emai  ***
    if (!emailRegex.test(formEmailValue)) {
      formMessages02.classList.add('active');
      formEmail.classList.add('error-outline');
    } else {
      formMessages02.classList.remove('active');
      formEmail.classList.remove('error-outline');

      alert(
        `🎉 Thank you, ${formEmailValue}! Your request has been submitted.`
      );
    }
  }
});
