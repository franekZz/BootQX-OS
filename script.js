let userData = {
    name: "Użytkownik",
    pass: "",
    theme: "dark-purple"
};

function startInstallation() {
    userData.name = document.getElementById('username-input').value || "Użytkownik";
    userData.pass = document.getElementById('password-input').value;
    userData.theme = document.getElementById('theme-select').value;

    // Zastosuj motyw
    document.body.className = "theme-" + userData.theme;
    
    // Przełącz na ładowanie
    document.getElementById('config-screen').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'flex';
    
    runLoading();
}

function runLoading() {
    let width = 0;
    const bar = document.getElementById('progress');
    const status = document.getElementById('loading-status');
    
    const interval = setInterval(() => {
        width++;
        bar.style.width = width + '%';
        if(width == 20) status.innerText = "Konfigurowanie motywu...";
        if(width == 50) status.innerText = "Tworzenie konta: " + userData.name;
        if(width == 80) status.innerText = "Finalizowanie ustawień...";
        
        if (width >= 100) {
            clearInterval(interval);
            showLogin();
        }
    }, 40);
}

function showLogin() {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('welcome-user').innerText = "Witaj, " + userData.name + "!";
    
    if (userData.pass === "") {
        document.getElementById('pass-field').style.display = 'none';
        document.getElementById('auto-login-btn').style.display = 'block';
    }
}

function login() {
    const enteredPass = document.getElementById('login-password').value;
    if (userData.pass === "" || enteredPass === userData.pass) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('desktop').style.display = 'block';
        document.getElementById('user-display').innerText = "Zalogowano: " + userData.name;
        document.getElementById('win-header').innerText = "Notatnik - " + userData.name;
        updateTime();
    } else {
        document.getElementById('error-msg').innerText = "Niepoprawne hasło!";
    }
}

function updateTime() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString();
    setTimeout(updateTime, 1000);
}
