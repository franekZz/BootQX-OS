function login() {
    const pass = document.getElementById('password').value;
    if (pass === "123") {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
        updateTime();
    } else {
        document.getElementById('error-msg').innerText = "Błędne hasło!";
    }
}

function updateTime() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
    setTimeout(updateTime, 1000);
}
