document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username !== "" && password !== "") {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        window.location.href = 'home.html';
    } else {
        alert("Please fill in both fields.");
    }
});
