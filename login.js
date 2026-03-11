async function validateLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const messageBox = document.getElementById("signInBox");

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const matchedUser = users.find(
      (user) => user.username.toLowerCase() === username.toLowerCase()
    );

    if (!matchedUser) {
      showMessage(messageBox, "Invalid username or password.", "error");
      return;
    }

    if (matchedUser.email !== password) {
      showMessage(messageBox, "Invalid username or password.", "error");
      return;
    }

    showMessage(messageBox, "Login successful. Redirecting in 2 Seconds", "success");
    setTimeout(() => {
      window.location.href = "menu_view.html";
    }, 2000);

  } catch (error) {
    showMessage(messageBox, "Please try again.", "error");
  }
}

function showMessage(box, message, type) {
  box.textContent = message;
  box.className = type;
  box.style.display = "block";
}

document.getElementById("submit").addEventListener("click", validateLogin);