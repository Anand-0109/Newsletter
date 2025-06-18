document.getElementById('signUpForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let isValid = true;
  
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
  
    // Validate Username
    if (!username.value.trim()) {
      username.classList.add('is-invalid');
      isValid = false;
    } else {
      username.classList.remove('is-invalid');
    }
  
    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      email.classList.add('is-invalid');
      isValid = false;
    } else {
      email.classList.remove('is-invalid');
    }
  
    // Validate Password
    if (password.value.length < 8) {
      password.classList.add('is-invalid');
      isValid = false;
    } else {
      password.classList.remove('is-invalid');
    }
  
    // Validate Confirm Password
    if (password.value !== confirmPassword.value) {
      confirmPassword.classList.add('is-invalid');
      isValid = false;
    } else {
      confirmPassword.classList.remove('is-invalid');
    }
  
    if (isValid) {
      alert('Form submitted successfully!');
      this.reset();
    }
  });
  