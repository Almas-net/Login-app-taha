const showPassword = document.querySelector('#showPassword');
const passwordId = document.querySelector('#passwordId');
showPassword.addEventListener("click", (e) => {
    const type = passwordId.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordId.setAttribute('type', type);
    e.target.classList.toggle('');
} );

