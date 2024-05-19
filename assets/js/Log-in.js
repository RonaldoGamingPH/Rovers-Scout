document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
    
fetch('/assets/js/Log-in.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }return response.json();
    })
    .then(login => {
        const user = login.Accounts.find(user => user.username === username);
        const pass = login.Accounts.find(pass => pass.password === password);

        //if username exist
        if (user) {
            //if password match
            if (pass) {
                alert('Log in successful!');
                // Redirect based on role
                if (user.role === "ADMIN") {
                    window.location.href = '/assets/html/Admin.html';
                } else if (user.role === "USER") {
                    window.location.href = '/assets/html/Home.html';
                }
            } else {
                alert('Incorrect password. Please try again.');
            }
        }else {
            alert('Invalid Username, Please Sign Up.');
        }
        })
        .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});