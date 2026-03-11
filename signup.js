function validateSignup() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm_password").value;
  const email = document.getElementById("email").value.trim();
  const messageBox = document.getElementById("signupMessageBox");

  const errors = [];

  if (username.length < 3 || username.length > 20) {
    errors.push("Username must be between 3 and 20 characters.");
  } else if (!/^[A-Za-z]/.test(username)) {
    errors.push("Username must start with a letter.");
  } else if (!/^[A-Za-z][A-Za-z0-9\-_]*$/.test(username)) {
    errors.push("Username can only contain letters, numbers, hyphens, and underscores.");
  }

  if (password.includes(" ")) {
    errors.push("Password cannot contain spaces.");
  } else if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
  } else if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter.");
  } else if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter.");
  } else if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number.");
  } else if (!/[!@#$%^&*()\-_=+\[\]{}|;:'",.<>?/`~]/.test(password)) {
    errors.push("Password must contain at least one special character.");
  }

  if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  if (email.includes(" ")) {
    errors.push("Email cannot contain spaces.");
  } else if (!email.includes("@")) {
    errors.push("Email must contain an '@' symbol.");
  } else if (!/^[^\s@]+@[^\s@]+\.(com|net|io)$/.test(email)) {
    errors.push("Email must be a valid format ending in .com, .net, or .io.");
  }

  if (errors.length > 0) {
    showMessage(messageBox, errors.join("<br>"), "error");
  } else {
    showMessage(messageBox, "Signup successful! Redirecting to login...", "success");
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  }
}

function showMessage(box, message, type) {
  box.innerHTML = message;
  box.className = type;
  box.style.display = "block";
}

document.getElementById("signup_btn").addEventListener("click", validateSignup);