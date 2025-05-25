import Navbar from './Navbar.js';
import Dashboard from './Dashboard.js';
import '../styles/Login.css';
import '../styles/index.css';

const url_prefix = 'http://127.0.0.1:3001'

const Login = (container) => {
  console.log('FUNCTIA LOGIN SE APLELEAZA');

  const loginForm = document.createElement('form');
  loginForm.classList.add('login-form');

  const title = document.createElement('h2');
  title.textContent = 'Login';
  loginForm.appendChild(title);

  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.placeholder = 'Username';
  usernameInput.name = 'username';
  usernameInput.required = true;
  usernameInput.classList.add('form-input');
  loginForm.appendChild(usernameInput);

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Password';
  passwordInput.name = 'password';
  passwordInput.required = true;
  passwordInput.classList.add('form-input');
  loginForm.appendChild(passwordInput);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.textContent = 'Login';
  submitButton.classList.add('form-button');
  loginForm.appendChild(submitButton);

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

      const payload = {
          username: username,
          password: password,
      };
      
    //localStorage.setItem('user', username);
      const response = await fetch(url_prefix + '/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
      });

      const serverData = await response.json();

      if (response.ok) {
          loginForm.remove();
          
        Navbar(container);
        Dashboard(container); 
      }
      else {
          alert('Something incorect');
      }

    
  });

  container.append(loginForm);
};

export default Login;
