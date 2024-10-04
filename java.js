document.getElementById('sign-up').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const emailInput = document.getElementById('email');
    const errorMessage = document.getElementById('error-message');

    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); 
    if (isValid) {

        errorMessage.style.display = 'none'; 
        emailInput.classList.remove('error'); 


        document.getElementById('sign-up').style.display = 'none';
        document.getElementById('thank-you').style.display = 'flex';
        document.getElementById('user-email').innerText = email;
    } else {

        errorMessage.style.display = 'block'; 
        emailInput.classList.add('error'); 
        console.log("Invalid email");
    }
});

function dismissMessage() {
 
    document.getElementById('sign-up').style.display = 'flex'; 
    document.getElementById('thank-you').style.display = 'none'; 


    document.getElementById('email').value = '';
}