const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMessage = document.getElementById('errorMessage');


form.addEventListener('submit', (e) =>{
    let errors = false;
    

    if(email.value.trim() === ''){
        e.preventDefault();
        email.classList.add('incorrect')
        errors = true;
        errorMessage.innerText = 'Please provide a valid email address';
    }
})