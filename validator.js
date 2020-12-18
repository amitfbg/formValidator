/* 
* @function: validate
* @Description: This will validate if all the the fileds are correct before submitting
* @Author: Amit Kumar
*/

//Flag is for checking if all fileds are correct or not so that setTimer can be called
let flag = false;
function validate() {
    let userName = document.registration.UserName;
    let email = document.registration.Email;
    let password = document.registration.Password;
    let confirmPassword = document.registration.ConfirmPassword;

    // User Name Checking 
    function userNameCheck() {
        if (userName.value == "") {
            let msg = "User Name Required ";
            errorMessage(userName, msg);
        }
        else {
            let msg = "";
            successMessage(userName, msg);
        }
    }

    //Email Checking
    function emailCheck() {
        if (email.value == "") {
            let msg = "Email Required";
            errorMessage(email, msg);
        }
        else {
            if (validateEmail(email.value)) {
                let msg = "";
                successMessage(email, msg);
            }
            else {
                let msg = "Please Enter Valid Email";
                errorMessage(email, msg);
            }
        }
    }

    //Password Checking
    function passwordCheck() {
        if (password.value == "") {
            let msg = "Password Required";
            errorMessage(password, msg);
        }
        else {
            if (password.value.length < 6) {
                let msg = "Password is less than 6 character";
                errorMessage(password, msg);
            }
            else {
                let msg = "";
                successMessage(password, msg);
            }
        }
    }

    //Confirm Password Checking
    function confirmPasswordCheck() {
        if (confirmPassword.value == "") {
            let msg = "Confirm password required";
            errorMessage(confirmPassword, msg);
        }
        else {
            if (confirmPassword.value.length < 6) {
                let msg = "Password is less than 6 character";
                errorMessage(confirmPassword, msg);
            }
            else if (confirmPassword.value != password.value) {
                let msg = "Password is not matching";
                errorMessage(confirmPassword, msg);
            }
            else {
                let msg = "";
                successMessage(confirmPassword, msg);
            }
        }
    }

    //All function called here
    userNameCheck();
    emailCheck();
    passwordCheck();
    confirmPasswordCheck();

    // If all input fileds are correct then we are reseting form as it was in starting
    if (flag) {
        setTimeout(resetForm, 3000);
    }
}

/* 
@function: ErrorMessage
*/
function errorMessage(id, msg) {
    id.classList.remove("success");
    id.classList.add("error");
    id.nextElementSibling.innerHTML = msg;
    flag = false;
}

/* 
@function: successMessage
*/
function successMessage(id, msg) {
    id.classList.remove("error");
    id.classList.add("success");
    id.nextElementSibling.innerHTML = msg;
    flag = true;
}

/* 
@function: resetForm
*/
function resetForm() {
    document.getElementById("registration").reset();
    var rem = document.querySelectorAll(".success");
    for (let i = 0; i < rem.length; i++) {
        rem[i].classList.remove("success");
    }
}

/* 
@function: validateEmail
*/
function validateEmail(emailID) {
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        return false;
    }
    return true;
}