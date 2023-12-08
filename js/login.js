function performSignup() {
    alert('Signup button clicked!');
  }

function performLogin() {
    alert('Login button clicked!');
}

document.getElementById('signupButton').addEventListener('click', performSignup);
document.getElementById('loginButton').addEventListener('click', performLogin);

  

function openLoginPage() {
  window.location.href = './login.html';
}

function validateSignup(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username || !password) {
      alert('Username and Password are required');
      return;
    }

    if (!username.includes('@')) {
      alert('Username must contain the "@" character.');
      return;
    }

    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    alert('Login Successful\nUsername: ' + username + '\nPassword: ' + password)

    console.log('Username:', username);
    console.log('Password:', password);
  }