const form = document.getElementById("myForm");

// name Validation
function validateName() {
  const userName = document.getElementById("inputName").value.trim();
  const nameError = document.getElementById("nameError");

  if (userName === "") {
    nameError.innerHTML = "* Please enter your name.";
    return false;
  } else if (userName.length < 3) {
    nameError.innerHTML = "* Enter a valid Name";
    return false;
  } else if (!/^[a-zA-Z0-9_]+(?: [a-zA-Z0-9_]+)*$/.test(userName)) {
    nameError.innerHTML = "* Username should only contain alphanumeric characters, single space, or underscore.";
    return false;
  } else {
    nameError.innerHTML = "";
    return true;
  }
}

// email validation

function validateEmail() {
  const userEmail = document.getElementById("inputEmail").value.trim();
  const emailError = document.getElementById("emailError");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  if (userEmail === "") {
    emailError.innerHTML = "* Please enter your email.";
    
  } else if (!emailPattern.test(userEmail)) {
    emailError.innerHTML = "* Please enter a valid email address.";
  } else {
    emailError.innerHTML = "";
    return true;
  }
}

// password validation

function validatePassword() {
  const userPassword = document.getElementById("inputPassword").value.trim();
  const userVerifiedPassword = document.getElementById("inputPassword1").value.trim();
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");

    let errorMessages = [];

  if (userPassword === "") {
    errorMessages.push ("* Please enter your password");
  } else if (userPassword.length < 8){
    errorMessages.push("* Password should be atleast 8 characters");
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(userPassword)) {
    errorMessages.push("* Password should be at least 8 characters and contain at least one uppercase letter, one lowercase letter, and one number.");
  } 
    

  if (errorMessages.length > 0) {
    passwordError.innerHTML = errorMessages.join("<br>");

  } else {

    passwordError.innerHTML = "";

    if (userVerifiedPassword !== userPassword) {
      confirmPasswordError.innerHTML = "* Passwords do not match.";
    } else {
      confirmPasswordError.innerHTML = "";
    }
    
  }

 

  return errorMessages.length == 0 && userVerifiedPassword !== "" && userVerifiedPassword === userPassword;
}

form.addEventListener("submit", function validateForm(e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  if (isNameValid && isEmailValid && isPasswordValid) {
    form.submit();
  } 
});


