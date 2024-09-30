window.onload = function () {
    const loggedIn = localStorage.getItem('loggedIn');
    const username = localStorage.getItem('username');

    if (loggedIn === 'true') {
        document.getElementById('welcomeMessage').innerText = `Welcome, ${username}!`;
    } else {
        window.location.href = 'login.html';
    }

    document.getElementById('logoutButton').addEventListener('click', function () {
        localStorage.removeItem('loggedIn');
        localStorage.removeItem('username');
        window.location.href = 'login.html';
    });
};
