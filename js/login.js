document.getElementById("login-button").addEventListener('click', function () {
    // user email
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    // user password
    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;


    // condition......

    if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
        window.location.href = 'banking.html'
    }
    // warning

    else{
        const div = document.getElementById('div');
        const wrongInput = document.createElement('p');
        wrongInput.innerText = 'Please enter valid Email and Password';
        div.appendChild(wrongInput);
    }

});