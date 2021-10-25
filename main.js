
//Identify
const form = document.getElementById("form");
const email = document.querySelector (".emailInput");
const mobile = document.querySelector (".mobilenumber");
const password = document.querySelector (".password");
const emailError = document.getElementById("Error");
const mobileError = document.getElementById("mobileError");
const passwordError = document.getElementById("passwordError");
const signBtn = document.getElementById("signBtn")
const checkBox = document.getElementById ("checkBox");
const checkBoxError = document.querySelector (".checkBoxError");
let emailReg = /^[A-ZA-z0-9._-]+@(hotmail|gmail|yahoo).com$/
let mobileReg = /077[0-9]{7}/
let passReg = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,8}$/


function removeError(err) { 
    err.innerHTML = "";
  }
  //Email Validation
  form.addEventListener("submit", function (e) {
      e.preventDefault();
          try {
              if (email.value === "") throw "Please enter your email!";
              if (email.value !== "") removeError(emailError);
              if (!emailReg.test(email.value))
                  throw "You have entered an invalid email address!";
              if (emailReg.test(email.value))
                  removeError(emailError);
                  
          }   catch (error) {
              emailError.innerHTML = error;
          }
      });
      
  //Mobile Number validation
  
  form.addEventListener("submit", (e) => {

    try {

      if (mobile.value === "") throw "Please enter your mobile number";
      if (mobile.value !== "") removeError(mobileError);
      if (!mobileReg.test(mobile.value))
           throw "You have entered an invalid mobile number";
      if (mobileReg.test(mobile.value)) removeError(mobileError);

    } catch (error) {
      mobileError.innerHTML = error;
    }
  });
  //password Validation
  form.addEventListener("submit", (e) => {

    try {

      if (password.value === "") throw "please enter your password";
      if (password.value !== "") removeError(passwordError);
      if (!passReg.test(password.value))
        throw "A password contains at least 6-18 characters, one number, lower and uppercase letters and special characters";
      if (passReg.test(password.value))
        removeError(passwordError);
        
    } catch (error) {
      passwordError.innerHTML = error;
    }
  });
  //Checkbox Validation
  form.addEventListener("submit", (e) => {
    try {
      if (!checkBox.checked) throw "The checkbox should be checked";
      if (checkBox.checked) removeError(checkBoxError);
    } catch (error) {
      checkBoxError.innerHTML = error;
    }
  });
  
  

