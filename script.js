// Define valid credentials
const validCredentials = [
    { email: 'dan@gmail.com', password: 'password1' },
    { email: 'don@gmail.com', password: 'password2' },
    { email: 'vic@gmail.com', password: 'password3' }
  ];
  
  function login(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Check credentials
    const validUser = validCredentials.find(user => user.email === email && user.password === password);
    if (validUser) {
      // Store user information in local storage
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', validUser.email);
      window.location.href = 'dashboard.html'; // Redirect to the dashboard
    } else {
      // Show error message
      document.getElementById('error').textContent = 'Invalid credentials. Please try again.';
    }
  }
  
  function logout() {
    // Clear user information from local storage
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('username');
    window.location.href = 'index.html'; // Redirect to the homepage
  }
  
  // Check if the user is logged in on the dashboard page
  if (localStorage.getItem('loggedIn') === 'true') {
    const username = localStorage.getItem('username');
    document.getElementById('username').textContent = username;
  } else {
    // Redirect anonymous users to the login page
    window.location.href = 'login.html';
  }
  